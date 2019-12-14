import React, { useState } from 'react';
import { Form, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import { MyModal } from './modal';

function Xing(props) {

  const [job, setJob] = useState("")
  const [include, setInclude] = useState("")
  const [exclude, setExclude] = useState("")
  const [link, setLink] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    buildLink();
  }

  function buildLink() {
    let check_box = document.getElementById('checkJob')
    setLink("http://www.google.com/search?q=site:xing.com/profile/"
            + (job.length > 0 ? " intitle:" : "")
            + (check_box.checked ? "~" : "")
            + (job.length > 0 ? "\"" + job + "\"" : "")
            + (include.length > 0 ? "+\"" + include + "\"" : "")
            + (exclude.length > 0 ? "-\"" + exclude + "\"" : "")
            )          
  }

  return (
    <Form className="mt-4" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Job title</Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">The job title of candidates you are searching for e.g. marketing manager. 'Show similar jobs' finds synonyms e.g. checking this box for marketing returns media specialists</Tooltip>}>
            <span className="float-right"><FaQuestionCircle /></span>
          </OverlayTrigger>
          <Form.Control className="field__control" value={job} onChange={v => setJob(v.currentTarget.value)} placeholder="E.g. accountant OR cfo" />
          <Form.Check type="checkbox" label="Show similar jobs?" id='checkJob' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridJob_title">
          <Form.Label>location or keywords <strong>include</strong></Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" required>Add comma separated keywords or phrases to refine your search e.g. keywords like javascript, HTML or a phrase like Ruby on Rails. Adding more keywords makes your search narrower</Tooltip>}>
            <span className="float-right"><FaQuestionCircle /></span>
          </OverlayTrigger>
          <Form.Control className="field__control" value={include} onChange={v => setInclude(v.currentTarget.value)} placeholder="E.g. Engineer, Berlin" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridLocation" className="oneInput">
          <Form.Label>Keywords to <strong>exclude</strong></Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Anything you don't want e.g. adding senior here would help you find junior candidates. Separate each keyword or phrase with a comma. Excluding more keywords makes your search narrower</Tooltip>}>
            <span className="float-right"><FaQuestionCircle /></span>
          </OverlayTrigger>
          <Form.Control className="field__control" value={exclude} onChange={v => setExclude(v.currentTarget.value)} placeholder="E.g. Junior" />
        </Form.Group>
      </Form.Row>

      <MyModal link={link} socName="Xing" type="submit" ></MyModal>
    </Form>
  );
}

export { Xing };
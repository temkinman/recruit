import React, { useState } from 'react';
import { Form, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import { MyModal } from './modal';

function Twitter(props) {

  const [country, setCountry] = useState("")
  const [include, setInclude] = useState("")
  const [exclude, setExclude] = useState("")
  const [link, setLink] = useState("")

  function handleSubmit(event) {
    event.preventDefault();
    buildLink();
  }

  function buildLink() {
    setLink("http://www.google.com/search?q=site:twitter.com -inurl:(search|favorites|status|statuses|jobs) -intitle:(job|jobs) -recruiter -HR -careers"
      + (include ? "+\"" + include + "\"" : "")
      + (country ? "+\"" + country + "\"" : "")
      + (exclude ? "-\"" + exclude + "\"" : "")
        );
  }

  return (
    <Form className="mt-4" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>City or Country</Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">The ideal location of your candidates. For best results use a city e.g. London, New York, Zurich etc"</Tooltip>}>
            <span className="float-right"><FaQuestionCircle /></span>
          </OverlayTrigger>
          <Form.Control className="field__control" onChange={v => setCountry(v.currentTarget.value.trim())} placeholder="E.g. New York or London" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridJob_title">
          <Form.Label>Skills (keywords) to <strong>include</strong></Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" required>Add comma separated keywords or phrases to refine your search e.g. keywords like javascript, HTML or a phrase like Ruby on Rails. Adding more keywords makes your search narrower</Tooltip>}>
            <span className="float-right"><FaQuestionCircle /></span>
          </OverlayTrigger>
          <Form.Control className="field__control" onChange={v => setInclude(v.currentTarget.value.trim())} placeholder="E.g. PHP, Ruby, Linux" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridLocation" className="oneInput">
          <Form.Label>Skills (keywords) to <strong>exclude</strong></Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Any keyword here will not appear in your search. For example to show only web designers 'Illustrator' wil filter out general graphic designers</Tooltip>}>
            <span className="float-right"><FaQuestionCircle /></span>
          </OverlayTrigger>
          <Form.Control className="field__control" onChange={v => setExclude(v.currentTarget.value.trim())} placeholder="E.g. Illustrator" />
        </Form.Group>
      </Form.Row>

      <MyModal link={link} socName="Twitter" type="submit" ></MyModal>
    </Form>
  );
}

export { Twitter };
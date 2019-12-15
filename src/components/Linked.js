import React, { useState  } from 'react';
import { Form, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaQuestionCircle } from 'react-icons/fa';
import {MyModal} from './modal';

function LinkedIn (props){

  const [country, setCountry] = useState("all")
  const [job, setJob] = useState("")
  const [include, setInclude] = useState("")
  const [exclude, setExclude] = useState("")
  const [emloyer, setEmployer] = useState("")
  const [education, setEducation] = useState("all")
  const [link, setLink] = useState("")

  function handleSubmit(event){
    event.preventDefault();
    buildLink();
  }

  function buildLink(){
    let check_box = document.getElementById('checkJob')
    setLink("http://www.google.com/search?q="
            + (check_box.checked ? "~" : "")
            + (job ? "+\"" + job + "\"" : "")
            + (include ? "+\"" + include +"\"" : "")
						+ (exclude ? " -\"" + exclude +"\"" : "")
 						+ " -intitle:\"profiles\" -inurl:\"dir/+\"+site:"
						+ (country === 'all' ? "" : country + ".")
						+ "linkedin.com/in/+OR+site:"
						+ (country === 'all' ? "" : country + ".")
						+ "linkedin.com/pub/"
						+ (education === 'all' ? "" : "&as_oq=" + education)
						+ (emloyer ? "+\"Current+%2A+"+emloyer+"+%2A+\"" : "")
            );
  }

  return (
    <Form className="mt-4" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail" >
          <Form.Label>Country</Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">The country you need candidates in E.g. United Kingdom</Tooltip>}>
            <span className="float-right"><FaQuestionCircle/></span>
          </OverlayTrigger>

          <Form.Control as="select" value = {country} onChange = {v => setCountry(v.currentTarget.value)} required>
            <option value="all">All countries</option><option value="uk">United Kingdom</option><option value="www">United States</option><option value="ca">Canada</option><option value="af">Afghanistan</option><option value="al">Albania</option><option value="dz">Algeria</option><option value="ao">Angola</option><option value="ar">Argentina</option><option value="am">Armenia</option><option value="aw">Aruba</option><option value="au">Australia</option><option value="at">Austria</option><option value="bh">Bahrain</option><option value="bd">Bangladesh</option><option value="by">Belarus</option><option value="be">Belgium</option><option value="bz">Belize</option><option value="bo">Bolivia</option><option value="ba">Bosnia and Herzegovina</option><option value="br">Brazil</option><option value="bg">Bulgaria</option><option value="cl">Chile</option><option value="cn">China</option><option value="co">Colombia</option><option value="cr">Costa Rica</option><option value="hr">Croatia</option><option value="cy">Cyprus</option><option value="cz">Czech Republic</option><option value="dk">Denmark</option><option value="dm">Dominica</option><option value="do">Dominican Republic</option><option value="ec">Ecuador</option><option value="eg">Egypt</option><option value="sv">El Salvador</option><option value="ee">Estonia</option><option value="fk">Falkland Islands</option><option value="fi">Finland</option><option value="fr">France</option><option value="ge">Georgia</option><option value="de">Germany</option><option value="gh">Ghana</option><option value="gi">Gibraltar</option><option value="gr">Greece</option><option value="gt">Guatemala</option><option value="hk">Hong Kong</option><option value="hu">Hungary</option><option value="is">Iceland</option><option value="in">India</option><option value="id">Indonesia</option><option value="ir">Iran</option><option value="ie">Ireland</option><option value="il">Israel</option><option value="it">Italy</option><option value="jm">Jamaica</option><option value="jp">Japan</option><option value="jo">Jordan</option><option value="kz">Kazakhstan</option><option value="ke">Kenya</option><option value="kr">Korea</option><option value="kw">Kuwait</option><option value="la">Laos</option><option value="lv">Latvia</option><option value="lb">Lebanon</option><option value="lu">Luxembourg</option><option value="mk">Macedonia</option><option value="my">Malaysia</option><option value="mt">Malta</option><option value="mx">Mexico</option><option value="md">Moldova</option><option value="mc">Monaco</option><option value="me">Montenegro</option><option value="ma">Morocco</option><option value="mz">Mozambique</option><option value="mm">Myanmar</option><option value="np">Nepal</option><option value="nl">Netherlands</option><option value="nz">New Zealand</option><option value="ng">Nigeria</option><option value="no">Norway</option><option value="om">Oman</option><option value="pk">Pakistan</option><option value="pa">Panama</option><option value="pe">Peru</option><option value="ph">Philippines</option><option value="pl">Poland</option><option value="pt">Portugal</option><option value="pr">Puerto Rico</option><option value="qa">Qatar</option><option value="ro">Romania</option><option value="ru">Russian Federation</option><option value="st">Sao Tome and Principe</option><option value="sa">Saudi Arabia</option><option value="rs">Serbia</option><option value="sg">Singapore</option><option value="sk">Slovak Republic</option><option value="si">Slovenia</option><option value="za">South Africa</option><option value="es">Spain</option><option value="lk">Sri Lanka</option><option value="se">Sweden</option><option value="ch">Switzerland</option><option value="tw">Taiwan</option><option value="tz">Tanzania</option><option value="th">Thailand</option><option value="tg">Togo</option><option value="to">Tonga</option><option value="tt">Trinidad and Tobago</option><option value="tn">Tunisia</option><option value="tr">Turkey</option><option value="ug">Uganda</option><option value="ua">Ukraine</option><option value="ae">United Arab Emirates</option><option value="uy">Uruguay</option><option value="uz">Uzbekistan</option><option value="ve">Venezuela</option><option value="vn">Vietnam</option><option value="zw">Zimbabwe</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridJob_title">
          <Form.Label>Job title</Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled" required>The job title of candidates you are searching for e.g. marketing manager. 'Show similar jobs' finds synonyms e.g. checking this box for marketing returns media specialists</Tooltip>}>
            <span className="float-right"><FaQuestionCircle/></span>
          </OverlayTrigger>
          <Form.Control  onChange={v => setJob(v.currentTarget.value.trim())} placeholder="E.g. accountant OR cfo" />
          <Form.Check type="checkbox" label="Show similar jobs?" id="checkJob" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridLocation">
          <Form.Label>Location or keywords to <strong>include</strong></Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Add comma separated keywords or phrases to refine your search e.g. keywords like SEO, HTML or a phrase like Managing Director. Adding more keywords makes your search narrower</Tooltip>}>
            <span className="float-right"><FaQuestionCircle/></span>
          </OverlayTrigger>
          <Form.Control onChange={v => setInclude(v.currentTarget.value.trim())} placeholder="E.g. London OR Paris AND HTML" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridJob_title">
          <Form.Label>Keywords to <strong>exclude</strong></Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Anything you don't want e.g. adding senior here would help you find junior candidates. Separate each keyword or phrase with a comma. Excluding more keywords makes your search narrower</Tooltip>}>
            <span className="float-right"><FaQuestionCircle/></span>
          </OverlayTrigger>
          <Form.Control onChange={v => setExclude(v.currentTarget.value.trim())} placeholder="E.g. assistant OR secretary" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Education</Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Select the level of education you're looking for e.g. Degree or Masters</Tooltip>}>
            <span className="float-right"><FaQuestionCircle/></span>
          </OverlayTrigger>
          <Form.Control as="select" value={education} onChange={v => setEducation(v.currentTarget.value)}>
            <option value="all">All candidates</option>
					  <option value="bachelor+degree+licence">Degree</option>
					  <option value="masters+mba+master+diplome+msc+magister+magisteres+maitrise">Masters Degree</option>
					  <option value="dr+Ph.D.+PhD+D.Phil+DPhil+doctor+Doctorado+Doktor+Doctorat+Doutorado+DrSc+Tohtori+Doctorate+Doctora+Duktorah+Dottorato+Daktaras+Doutoramento+Doktorgrad">Doctoral Degree</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label >Current Employer</Form.Label>
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">The employer the candidate is currently working for</Tooltip>}>
            <span className="float-right"><FaQuestionCircle/></span>
          </OverlayTrigger>
          <Form.Control onChange={v => setEmployer(v.currentTarget.value.trim())} placeholder="E.g. Paypal"/>
        </Form.Group>
      </Form.Row>
      <MyModal link={link}  socName="LinkedIn"  type="submit" ></MyModal>
    </Form>
  );
}

export {LinkedIn};
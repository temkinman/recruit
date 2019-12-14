import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs } from 'react-bootstrap';
import {LinkedIn} from './Linked';
import {Twitter} from './Twitter';
import {Xing} from './Xing';

class Navigation extends React.Component {
	render() {
	  return (
      <Tabs defaultActiveKey="LinkedIn" id="uncontrolled-tab-example" className="nav">
        <Tab eventKey="LinkedIn" title="LinkedIn">
          <LinkedIn/>
        </Tab>
        <Tab eventKey="Twitter" title="Twitter">
          <Twitter/>
        </Tab>
        <Tab eventKey="Xing" title="Xing">
          <Xing/>
        </Tab>
      </Tabs>
	  );
	}
}

export { Navigation};
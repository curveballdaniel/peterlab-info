import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class AbstractAccordion extends Component {
  render() {
    const {
      props: { children },
    } = this;

    return (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Preview Abstract
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {children}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default AbstractAccordion;

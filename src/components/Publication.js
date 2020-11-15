import React from 'react';
import AbstractAccordion from "./accordion/Accordion"
import Container from 'react-bootstrap/Container'

export default class Publication extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <hr/>
          <div className="publication-wrapper">
            <span className="publication-date">{this.props.date}</span> |
            <span className="publication-title"><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.title}</a></span>
            <div className="publication-authors">{this.props.authors}</div>
            <div className="publication-extra"><em>{this.props.place}</em> {this.props.extra} <a href={this.props.link} target="_blank" rel="noopener noreferrer">PMID: {this.props.pmid}</a></div>
          </div>
          <AbstractAccordion>
            {this.props.background ?
              <p><strong>Background: </strong> {this.props.background}</p> : <p>{this.props.abstract}</p>}
            {this.props.objectives ?
              <p><strong>Objectives: </strong> {this.props.objectives}</p> : null}
            {this.props.purpose ?
              <p><strong>Purpose: </strong> {this.props.purpose}</p> : null}
            {this.props.design ?
              <p><strong>Design: </strong> {this.props.design}</p> : null}
            {this.props.methods ?
              <p><strong>Methods: </strong> {this.props.methods}</p> : null}
            {this.props.results ?
              <p><strong>Results: </strong> {this.props.results}</p> : null}
            {this.props.conclusions ?
              <p><strong>Conclusions: </strong> {this.props.conclusions}</p> : null}
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">View Publication</a>
          </AbstractAccordion>
        </Container>
      </div>
    );
  }
}

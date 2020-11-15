import React from 'react';
import FlipCard from './flip-card/FlipCard'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class PeopleContent extends React.Component {
    render() {
      return (
        <div>
          <div className="container">
            <h2 id="people-title" style={{"textAlign": "center"}}>People</h2>
            <hr/>
            <h2 style={{"textAlign": "center"}}>Hover over us!</h2>

            <Container>
              <Row>
                <Col>
                  <FlipCard
                    name="Inga Peter, PhD"
                    firstName="Inga"
                    title="PRINCIPAL INVESTIGATOR"
                    imageLink="http://labs.icahn.mssm.edu/peterlab/wp-content/uploads/sites/96/2015/06/ingapeter-yp-150x150.jpg"
                    showProjects={false}
                    projects={["Professor, Department of Genetics and Genomic Sciences",
					    			          "Affiliated Member, Icahn Institute for Genomics and Multiscale Biology",
					    			          //"Affiliated Member, Charles Bronfman Institute for Personalized Medicine",
					    			          "Co-Director, PhD in Clinical Research Program"]}
                  />
                </Col>
                <Col>
                  <FlipCard
                    name="Jianzhong Hu, PhD"
                    firstName="Brian"
                    title="ASSISTANT PROFESSOR"
                    imageLink="http://labs.icahn.mssm.edu/peterlab/wp-content/uploads/sites/96/2015/06/brianhu-150x150.jpg"
                    showProjects={true}
                    projects={["The Interplay between The Microbiome and Host Genetics in Crohn’s Disease"]}
                  />
                </Col>
                <Col>
                  <FlipCard
                    name="Sierra R. White, MPH"
                    firstName="Sierra"
                    title="CLINICAL RESEARCH COORDINATOR"
                    imageLink="http://labs.icahn.mssm.edu/peterlab/wp-content/uploads/sites/96/2015/06/Sierra_lab1-150x150.jpg"
                    showProjects={true}
                    projects={["Cardiometabolic Complications in People Living with HIV",
                              "Genetics and Genomics of Nonsyndromic Coronal Craniosynostosis"]}
                  />
                </Col>
              </Row>

              <Row>
                <hr/>
              </Row>

              <Row>
                <Col>
                  <FlipCard
                    name="Leonid Tarassishin, PhD"
                    firstName="Leonid"
                    title="Associate Researcher II"
                    imageLink="https://labs.icahn.mssm.edu/peterlab/wp-content/uploads/sites/96/2015/05/leo_pic-150x150.jpg"
                    showProjects={true}
                    projects={["The MECONIUM Study, The MELODY Trial"]}
                  />
                </Col>
                <Col>
                  <FlipCard
                    name="Caroline Eisele, BS"
                    firstName="Caroline"
                    title="PROJECT MANAGER"
                    imageLink="https://labs.icahn.mssm.edu/peterlab/wp-content/uploads/sites/96/2015/05/carolinepic-150x150.jpg"
                    showProjects={true}
                    projects={["The MECONIUM Study, The MELODY Trial"]}
                  />
                </Col>
                <Col>
                  <FlipCard
                    name="Kelly Hawkins, BS"
                    firstName="Kelly"
                    title="CLINICAL RESEARCH COORDINATOR"
                    imageLink="https://labs.icahn.mssm.edu/peterlab/wp-content/uploads/sites/96/2019/06/kelly-150x150.jpg"
                    showProjects={true}
                    projects={["The MELODY Trial, The MECONIUM Study"]}
                  />
                </Col>
              </Row>

            </Container>
          </div>
        </div>
      );
    }
  }

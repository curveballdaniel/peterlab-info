import React, { Component } from "react";
//import Tab from "./Tab";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Button from 'react-bootstrap/Button'

import HomeCarousel from "./carousel/Carousel"

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import HomeContent from "./HomeContent"
import ResearchContent from "./ResearchContent"
import PeopleContent from "./PeopleContent"
import PublicationsContent from "./PublicationsContent"
import JobsContent from "./JobsContent"
import ContactContent from "./ContactContent"
// carousel

class MadeTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: 'home'
    };
  }

  changeTab = (name) => {
    this.setState({ key: name })
  }

  waitForId = (id) => {
    const element = document.getElementById(id)
    setTimeout(function waitPanelMainWrapper() {
        if (document.body.contains(element)) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            setTimeout(waitPanelMainWrapper, 10);
        }
    }, 10);
  }

  render() {
    const {
      changeTab,
      waitForId
    } = this;

    return (
      <div>
        <HomeCarousel />
        <div className="tabs col-xs-12">
          <Navbar className="flex" expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse className="flex" id="basic-navbar-nav">
              <Nav justify className="m-auto">
                <NavDropdown title="Home" id="nav-dropdown">
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                      changeTab('home')
                      waitForId('research-interests')
                    }}>Our Research Interests</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                      changeTab('home')
                      waitForId('other-news')
                    }}>In Other News</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                      changeTab('home')
                      waitForId('related-pages')
                    }}>Related Pages</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Research" id="nav-dropdown">
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('research')
                    waitForId('ibd-title')
                  }}>Inflammatory Bowel Disease (IBD)</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('research')
                    waitForId('systems-approach-ibd-title')
                  }}>Systems Biology Approach to IBD</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('research')
                    waitForId('meconium-study-title')
                  }}>MECONIUM Study</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('research')
                    waitForId('cardiovascular-title')
                  }}>Cardiovascular Disease</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('research')
                    waitForId('craniosynostosis-title')
                  }}>Craniosynostosis Network</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link componentclass={Button} onClick={function() {
                    changeTab('people')
                    waitForId('people-title')
                  }}>People</Nav.Link>
                <NavDropdown title="Publications" id="nav-dropdown">
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('publications')
                    waitForId('obesity-diabetes-etc')
                  }}>Obesity, Diabetes, and Cardiovascular</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('publications')
                    waitForId('craniosynostosis')
                  }}>Craniosynostosis</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('publications')
                    waitForId('inflammatory-bowel-disease')
                  }}>Inflammatory Bowel Disease</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('publications')
                    waitForId('microbiome')
                  }}>Microbiome</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('publications')
                    waitForId('ashkenazi-jewish-genetics')
                  }}>Ashkenazi Jewish Genetics</NavDropdown.Item>
                  <NavDropdown.Item componentclass={Button} onClick={function() {
                    changeTab('publications')
                    waitForId('other-topics')
                  }}>Other Topics</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link componentclass={Button} onClick={function() {
                    changeTab('jobs')
                    waitForId('job-title')
                  }}>Jobs</Nav.Link>
                <Nav.Link componentclass={Button} onClick={function() {
                    changeTab('contact')
                    waitForId('contact-title')
                  }}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Tabs className="tab-list" activeKey={this.state.key} onSelect={this.changeTab} id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <HomeContent />
            </Tab>
            <Tab eventKey="research" title="Research">
              <ResearchContent />
            </Tab>
            <Tab eventKey="people" title="People">
              <PeopleContent />
            </Tab>
            <Tab eventKey="publications" title="Publications">
              <PublicationsContent />
            </Tab>
            <Tab eventKey="jobs" title="Jobs">
              <JobsContent />
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <ContactContent />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default MadeTabs;

/*
change caro: last one (contact us - link to contact), first one- button to "meet the team"
*/

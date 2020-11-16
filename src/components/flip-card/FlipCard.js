import React from "react";

class FlipCard extends React.Component {
  render() {
    let projectList = ""

    if (this.props.projects) {
      projectList = this.props.projects.map((project) =>
        <li key={project.toString()}><p>&#187; {project}</p></li>
      )
    }

    return (
      <div className="col-lg-4 col-sm-6">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={this.props.imageLink}
                alt="Avatar"
                style={{"width": "300px", "height": "300px"}}
              />
            </div>
            <div className="flip-card-back">
              <div className="flip-card-back-top">
                <h3 className="flip-card-margin">{this.props.name}</h3>
                <span>{this.props.title}</span>
              </div>
              <div className="flip-card-back-middle">
                {this.props.showProjects ?
                  <h4 className="flip-card-margin">Projects:</h4> : null}
                <ul className="flip-card-margin">
                  {projectList}
                </ul>
              </div>
              <div className="flip-card-back-bottom">
                View {this.props.firstName} at:
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlipCard;

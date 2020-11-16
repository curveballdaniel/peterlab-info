import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class HomeCarousel extends Component {
  render() {
      return (
          <Carousel autoPlay infiniteLoop centerMode centerSlidePercentage={100}>
              <div className="">
                <img
                  className=""
                  src=  {window.location.origin + "/images/full-ipeter-lab.png"}
                  alt="First slide"
                  style={{height: '400px', width: 'auto'}}
                />
                  <p className="legend">Welcome to the Peter Lab!</p>
              </div>
              <div className="">
                <img
                  className=""
                  src={window.location.origin + "/images/road-to-prevention-group-picture.jpg"}
                  alt="Second slide"
                  style={{height: '400px', width: 'auto'}}
                />
                  <p className="legend">Read more about our "Road to Prevention" for IBD</p>
              </div>
              <div className="">
                <img
                  className=""
                  src={window.location.origin + "/images/craniosynostosis-image.jpg"}
                  alt="Third slide"
                  style={{height: '400px', width: '500px'}}
                />
                  <p className="legend">Research in Inflammatory Bowel Disease, Cardiovascular Disease, Craniosynostosis, and more!</p>
              </div>
              <div className="">
                <img
                  className=""
                  src={window.location.origin + "/images/nyc-mount-sinai-background.png"}
                  alt="Fourth slide"
                  style={{height: '400px', width: 'auto'}}
                />
                  <p className="legend">We are looking to hire! Check our available positions under Jobs</p>
              </div>

          </Carousel>
      )
  }
}

// fix so that the images are 100% on ONLY mobile

export default HomeCarousel;

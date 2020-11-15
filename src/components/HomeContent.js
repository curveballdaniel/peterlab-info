import React from 'react';

export default class HomeContent extends React.Component {

  /*

  the next thing to do is to implement one of the tabs as react bootstrap tabs, and see if the nav will auto-scroll to it. if so, change all to it.
  then, go to the nav, and change all of the id-gets to move immediately to the tabs place

  */

    render() {
      return (
        <div>
          <div className="container">
            <h2 style={{"textAlign": "center"}}>Home</h2>
            <hr/>
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={window.location.origin + "/images/pointing-at-computer.png"} alt=""/>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4" id="research-interests">Our Research Interests</h2>
                  <p>Our laboratory investigates the interplay between the host genetics, microbiome, and environmental exposures in the development of complex diseases, including cardiovascular disease, type 2 diabetes, inflammatory bowel disease, and <a href="https://labs.icahn.mssm.edu/peterlab/craniosynostosis-network/" target="_blank" rel="noopener noreferrer">craniosynostosis</a>. We combine genetic mapping in admixed and isolated populations with systems biology approaches and experimental studies to gain a deeper understanding of the biological pathways involved in disease pathogenesis and risk transmission. A detailed description of current projects can be found under the <em>Research</em> tab.</p>
                  </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={window.location.origin + "/images/lab-picture-1.png"} alt=""/>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <h2 className="display-4" id="other-news">In Other News</h2>
                  <p>In partnership with the&nbsp;<a title="Jewish Crohn's &amp; Colitis Support Group" href="http://jccsg.blogspot.com/" target="_blank" rel="noopener noreferrer">Jewish Crohn’s &amp; Colitis Support Group</a>, we organized the first&nbsp;<a title="Road to Prevention" href="http://jccsg.blogspot.com/2015/05/road-to-prevention-event-1-thanks-whats.html" target="_blank" rel="noopener noreferrer">“ROAD TO PREVENTION” event</a>&nbsp;in Monsey, NY sponsored by the Icahn School of Medicine at Mount Sinai and aimed to raise community awareness for IBD and related research. The goal is to enroll patients and family members into ongoing and future studies to help develop new approaches to reduce the risk of IBD.</p>
                  </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={window.location.origin + "/images/cells-pic-1.png"} alt=""/>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4" id="related-pages">Related Pages</h2>
                  <ul>
                    <li><a href="http://icahn.mssm.edu/" target="_blank" rel="noopener noreferrer">Icahn School at Mount Sinai</a></li>
                    <li><a href="http://icahn.mssm.edu/education/graduate/clinical-research" target="_blank" rel="noopener noreferrer">Mount Sinai Clinical Research Education Program</a></li>
                    <li><a href="http://www.ccfa.org/" target="_blank" rel="noopener noreferrer">Crohn’s and Colitis Foundation of America</a></li>
                    <li><a href="https://www.nature.com/articles/ng.2463" target="_blank" rel="noopener noreferrer">Nature Genetics</a></li>
                    <li><a href="https://www.nature.com/articles/s41390-019-0274-2" target="_blank" rel="noopener noreferrer">Pediatric Research</a></li>
                    <li><a href="http://www.cell.com/ajhg/current" target="_blank" rel="noopener noreferrer">American Journal of Human Genetics</a> current issue</li>
                    <li><a href="http://www.genecards.org/" target="_blank" rel="noopener noreferrer">Gene Encyclopedia</a></li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
        </div>
      );
    }
  }

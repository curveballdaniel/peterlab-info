import React from 'react';

export default class ContactContent extends React.Component {
    render() {
      return (
        <div>
          <div className="container">
            <h2 id="contact-title" style={{"textAlign": "center"}}>Contact us</h2>
            <hr/>
            <h3>Inga Peter, PhD</h3>
            <p>Professor<br/>
            Department of Genetics &amp; Genomic Sciences<br/>
            Icahn School of Medicine at Mount Sinai<br/>
            1425 Madison Avenue, Box 1498<br/>
            New York, NY 10029<br/></p>
            <p>Tel:&nbsp;212-659-8566<br/>
            Fax:&nbsp;212-659-5657</p>
            <p>Follow us on Twitter&nbsp;<a href="https://twitter.com/IcahnInstitute" rel="noopener noreferrer" target="_blank">@IcahnInstitute</a></p>
          </div>
        </div>
      );
    }
  }

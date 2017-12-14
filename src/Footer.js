import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {

  render() {
    const date = new Date();
    const copyright = date.getFullYear();
    return (
      <footer className="page-footer grey">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Justin Hunter</h5>
              <p className="grey-text text-lighten-4">Author, designer, developer, person.</p>
            </div>
            <div className="col l4 offset-l2 s12">

              <ul>
                <li><Link to={"/about"}><a className="grey-text text-lighten-3">About</a></Link></li>
                <li><Link to={"/"}><a className="grey-text text-lighten-3">Writing</a></Link></li>
                <li><Link to={"/software"}><a className="grey-text text-lighten-3">Software</a></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © {copyright} Justin Hunter
          <a className="grey-text text-lighten-4 right" href="https://twitter.com/jehunter5811"><img className="responsive-image twitter" src="https://image.flaticon.com/icons/svg/23/23931.svg" alt="twitter logo" /></a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

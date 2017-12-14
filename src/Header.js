import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper white">
        <div className="nav-links">
          <Link to={"/"}><a href="#" className="logo">Justin Hunter</a></Link>
          <ul id="nav-mobile" className="links right">
            <li><Link to={"/"}>Writing</Link></li>
            <li><Link to={"/software"}>Software</Link></li>
            <li><Link to={"/about"}>About</Link></li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default Header;

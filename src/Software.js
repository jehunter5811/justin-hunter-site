import React, { Component } from 'react';
import SoftwarePage from './SoftwarePage';
import Design from './Design';

class Software extends Component {

  constructor() {
    super();
    this.state = {
      software: true
    };
  }

  renderSoftware() {
    if(this.state.software === true) {
      return (
        <SoftwarePage />
      );
    } else {
      return (
        <Design />
      );
    }
  }

  render() {
    return (
      <div className="container center-align">
        <div className="nav-content center-align">
          <ul className="tabs">
            <li className="tab"><a onClick={() => this.setState({ software: true })}>Software</a></li>
            <li className="tab"><a onClick={() => this.setState({ software: false })}>Design</a></li>
          </ul>
        </div>
        {this.renderSoftware()}
      </div>
    );
  }
}

export default Software;

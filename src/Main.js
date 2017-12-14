import React, { Component } from 'react';
import Fiction from './Fiction';
import Other from './Other';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      fiction: true
    };
  }

  renderWriting() {
    if(this.state.fiction === true) {
      return (
        <Fiction />
      );
    } else {
      return (
        <Other />
      );
    }
  }

  render() {
    return (
      <div className="container center-align">
        <div className="nav-content center-align">
          <ul className="tabs">
            <li className="tab"><a onClick={() => this.setState({ fiction: true })}>Fiction</a></li>
            <li className="tab"><a onClick={() => this.setState({ fiction: false })}>Other Writing</a></li>
          </ul>
        </div>
        {this.renderWriting()}
      </div>
    );
  }
}

export default Main;

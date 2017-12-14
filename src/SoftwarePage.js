import React, { Component } from 'react';

class SoftwarePage extends Component {

  constructor() {
    super();
    this.state = [
      {
      name: "Coinocle - Traditional",
      link: "http://app.coinocle.com",
      description: "A cryptocurrency management tool that lets you group your holdings by wallet.",
      img: "https://image.ibb.co/gbN3VR/coinocle.png"
      },
      {
      name: "Coinocle - Blockstack Dapp",
      link: "http://blockstack.coinocle.com",
      description: "A decentralized version of the original Coinocle, built on Blockstack.",
      img: "https://image.ibb.co/k83z4m/coinocle_blockstack.png"
      },
      {
      name: "React Auth & CRUD Boilerplate",
      link: "https://github.com/jehunter5811/react-auth-crud-boilerplate",
      description: "A React-based CRUD boilerplate with authentication",
      img: "https://image.ibb.co/c4Bac6/boilerplate.png"
      },
    ]
  }

  renderContent() {
    return this.state.map(item => {
      return (
        <a href={item.link} target="_blank">
          <div className="col s12">
            <div className="card">
              <div className="card-image">
                <img className="responsive-image" src={item.img} />
                <span className="card-title"></span>
              </div>
              <div className="card-content">
                <p className="black-text">{item.description}</p>
              </div>
              <div className="card-action">
                <a className="black-text">{item.name}</a>
              </div>
            </div>
          </div>
        </a>
      );
    });
  }

  render() {
    return (
      <div className="container center-align">
        <div className="row">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default SoftwarePage;

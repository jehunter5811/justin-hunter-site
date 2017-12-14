import React, { Component } from 'react';

class SoftwarePage extends Component {

  constructor() {
    super();
    this.state = [
      {
      name: "Coinocle - Traditional",
      link: "http://app.coinocle.com",
      description: "A cryptocurrency management tool that lets you group your holdings by wallet.",
      img: "https://photos-1.dropbox.com/t/2/AAA6s7agrkyA_gFT60jmK2RTxrD7DaFwSiNUESFK-Tj8MA/12/425412701/png/32x32/1/_/1/2/coinocle.png/EMy5pbUDGMMjIAIoAg/F-2JwEbiBn8w-vIKL6bZnkM4J4AKt_2btOYScgeaP5o?preserve_transparency=1&size=2048x1536&size_mode=3"
      },
      {
      name: "Coinocle - Blockstack Dapp",
      link: "http://blockstack.coinocle.com",
      description: "A decentralized version of the original Coinocle, built on Blockstack.",
      img: "https://photos-5.dropbox.com/t/2/AABr3hPB8rpT4jW3dQK93AHoq_aWFW9etdIaMcuUVTl8TQ/12/425412701/png/32x32/1/_/1/2/coinocle-blockstack.png/EMy5pbUDGMQjIAIoAg/ZHdIFfae3C9pUu-DzDPQ5NYejToozSk47yv47XikSnQ?preserve_transparency=1&size=2048x1536&size_mode=3"
      },
      {
      name: "React Auth & CRUD Boilerplate",
      link: "https://github.com/jehunter5811/react-auth-crud-boilerplate",
      description: "A React-based CRUD boilerplate with authentication",
      img: "https://photos-3.dropbox.com/t/2/AACnQjqFunwaeFs5wbIAO2lx9WuxbKTxiIklrH1DsPoJNA/12/425412701/png/32x32/1/_/1/2/boilerplate.png/EMy5pbUDGMUjIAIoAg/Inea0wxsGol27sP-hrf2idBnKbQrOb-MetXAgxRBWCM?preserve_transparency=1&size=2048x1536&size_mode=3"
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

import React, { Component } from 'react';

class Design extends Component {

  constructor() {
    super();
    this.state = [
      {
      name: "Coinocle Marketing Site",
      link: "http://coinocle.com",
      description: "Built with HTML and CSS.",
      img: "https://image.ibb.co/cZMmjm/coinocle_marketing.png"
      },
      {
      name: "Charlie Allison's Author Site",
      link: "http://www.charlie-allison.com",
      description: "An author site built with React.",
      img: "https://preview.ibb.co/carK4m/charlie_site.png"
      },
      {
      name: "SlideRoom Blog",
      link: "http://blog.slideroom.com",
      description: "Marketing blog for SlideRoom built with Ghost.",
      img: "https://image.ibb.co/dksqc6/slideroom.png"
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

export default Design;

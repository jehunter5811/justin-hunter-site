import React, { Component } from 'react';

class Design extends Component {

  constructor() {
    super();
    this.state = [
      {
      name: "Coinocle Marketing Site",
      link: "http://coinocle.com",
      description: "Built with HTML and CSS.",
      img: "https://photos-1.dropbox.com/t/2/AABsNsAu419CszalAnNaulJyM--fn-QncTZa43eerGLBQQ/12/425412701/png/32x32/1/_/1/2/coinocle-marketing.png/EMy5pbUDGMYjIAIoAg/3Ws8G4rJlOLRQzwG3toz-DT5-JClRPH8iqYPInLJ6a8?preserve_transparency=1&size=2048x1536&size_mode=3"
      },
      {
      name: "Charlie Allison's Author Site",
      link: "http://www.charlie-allison.com",
      description: "An author site built with React.",
      img: "https://photos-6.dropbox.com/t/2/AADF9TZ5YePD4ljJnZ3KEsiWj3lY-NxPaWjaLxepROZwUA/12/425412701/png/32x32/1/_/1/2/charlie-site.png/EMy5pbUDGMcjIAIoAg/NWpKb0HqDO1vdg6Hc4IS13tpRFPLH9nMoslqRS0q4sc?preserve_transparency=1&size=2048x1536&size_mode=3"
      },
      {
      name: "SlideRoom Blog",
      link: "http://blog.slideroom.com",
      description: "Marketing blog for SlideRoom built with Ghost.",
      img: "https://photos-3.dropbox.com/t/2/AABIRe9lnF2scboP8cVDYTmXShJ5pnJz9ZoSY-tU8I44Lg/12/425412701/png/32x32/1/_/1/2/slideroom.png/EMy5pbUDGMgjIAIoAg/lY4fZ0bRG6KH-twiD7pozet50fzmifd2Ox_VNBNTE-4?preserve_transparency=1&size=2048x1536&size_mode=3"
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

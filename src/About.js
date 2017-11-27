import React, { Component } from 'react';
import './App.css';
import justin from "./images/justin.jpg";


class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="author-card">
        <div className="center">
          <img className="author-photo" src={justin} alt="author" />
        </div>
        <h4 className="left-align">About Justin</h4>
        <p>Justin Hunter grew up in Tucson, AZ, a place <a href="http://tucson.com/article_9b3b6c4f-2a07-57c7-bbbd-60ed524241a8.html">famous for tuberculosis</a> and the University of Arizona. He spent most his life trying to escape, but now that he has, he finds himself drawn back in through his writing. He is married to a woman who not only accepts the crazy people living in his head, she actively engages them. His two young boys don't know what they're in for.</p>
        <p>Justin received his MFA from Arcadia University. He realized he was a writer at the age of seven when he penned the classic, <i>Jacques Cousteau and the Underwater Robot Octopus</i>. A gold star to anyone who tracks down a copy of that gem.</p>
        <p>When he's not writing, Justin is probably doing things that actually pay the bills. That, or he's watching baseball. Or he's at the bottom of a doggie-pile made of up children and, well, dogs.</p>
        <p>If you'd like to get in touch with Justin, you can <a href="mailto:justin.edward.hunter@gmail.com">email him</a>. If you'd like to stalk him, you can find him on <a href="https://twitter.com/jehunter5811">Twitter</a>.</p>
        </div>
      </div>
    );
  }
}

export default About;

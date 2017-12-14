import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div className="container center-align">
        <img className="author-photo responsive-image" src="https://photos-3.dropbox.com/t/2/AACqfhj3tNXjJshbbuubmpTZYvxrSCSeK5PdqZWJpwqloA/12/425412701/jpeg/32x32/1/_/1/2/justin.jpg/EMy5pbUDGMkjIAIoAg/WYy6tmbDFigFMiKTaBwdutDEttuuFG_BJ3vpFhBlkv0?size=2048x1536&size_mode=3" alt="author-profile"/>
        <h3>About Justin</h3>
        <div className="left-align">
          <p>Justin Hunter grew up in Tucson, AZ, a place <a href="http://tucson.com/article_9b3b6c4f-2a07-57c7-bbbd-60ed524241a8.html" target="_blank"> famous for tuberculosis</a> and the University of Arizona. He spent most his life trying to escape, but now that he has, he finds himself drawn back in through his writing. He is married to a woman who not only accepts the crazy people living in his head, she actively engages them. His two young boys don't know what they're in for.</p>
          <p>Justin received his MFA from Arcadia University. He realized he was a writer at the age of seven when he penned the classic, <i>Jacques Cousteau and the Underwater Robot Octopus</i>. A gold star to anyone who tracks down a copy of that gem.</p>
          <p>When he is not writing, Justin is probably doing things that actually pay the bills. That, or he's watching baseball. Or he's at the bottom of a doggie-pile made of up children and, well, dogs.</p>
          <p>If you'd like to get in touch with Justin, you can <a href="mailto:justin.edward.hunter@gmail.com">email him</a>. If you'd like to stalk him, you can find him on <a href="https://twitter.com/jehunter5811" target="_blank">Twitter</a>.</p>
        </div>
      </div>
    );
  }
}

export default About;

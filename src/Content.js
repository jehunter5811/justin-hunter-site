import React, { Component } from 'react';
import './App.css';
import dunes from "./images/Dunes.jpeg";
import truck from "./images/truck.jpeg";
import hair from "./images/hair.jpeg";
import highway from "./images/highway.jpeg";
import coyote from "./images/coyote.jpeg";
import grave from "./images/grave.jpeg";
import motorcycle from "./images/motorcyle.jpeg";
import guy from "./images/guy.jpeg";
import stairs from "./images/stairs.jpeg";
import mine from "./images/mine.jpeg";
import arizona from "./images/arizona.jpeg";
import sign from "./images/sign.jpeg";
import aol from "./images/aol.jpeg";
import tree from "./images/tree.jpg";
import hand from "./images/hand.jpeg";
import car from "./images/car.jpeg";
import creosote from "./images/creosote.jpg";
import zombie from "./images/zombie.jpg";
import cactus from "./images/cactus.png";

class Content extends Component {
  render() {
    return (
      <div className="container">
    <h4 className="pub-heading center-align">Published Work</h4>
    <div className="row">
      <div className="col s12 m6 card">
        <a href="http://www.awspublishing.com/fiction/186/the-girl-in-the-tarp/">
          <img className="responsive-img" src={dunes} alt="sand dunes" />
        </a>
        <p><a className="pub-link" href="http://www.awspublishing.com/fiction/186/the-girl-in-the-tarp/">The Girl in the Tarp (AWS)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://scars.tv/cgi-bin/works_e.pl?/home/users/web/b929/us.scars/perl/text-writings/g6396.txt">
          <img className="responsive-img" src={truck} alt="truck" />
        </a>
        <p><a className="pub-link" href="http://scars.tv/cgi-bin/works_e.pl?/home/users/web/b929/us.scars/perl/text-writings/g6396.txt">Army Men (Down in the Dirt)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://scars.tv/cgi-bin/works_e.pl?/home/users/web/b929/us.scars/perl/text-writings/g6468.txt">
          <img className="responsive-img" src={hair} alt="hair" />
        </a>
        <p><a className="pub-link" href="http://scars.tv/cgi-bin/works_e.pl?/home/users/web/b929/us.scars/perl/text-writings/g6468.txt">Scars (Children, Churches, and Daddies)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://nebula.wsimg.com/36aadaecd4bb5ab826ea975110759f6f?AccessKeyId=3C22B84D674D5BA7A77D&disposition=0&alloworigin=1">
          <img className="responsive-img" src={highway} alt="road" />
        </a>
        <p><a className="pub-link" href="http://nebula.wsimg.com/36aadaecd4bb5ab826ea975110759f6f?AccessKeyId=3C22B84D674D5BA7A77D&disposition=0&alloworigin=1">Dirt Roads (Corvus Review)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://www.close2thebone.co.uk/wp/?p=3066">
          <img className="responsive-img" src={coyote} alt="coyote" />
        </a>
        <p><a className="pub-link" href="http://www.close2thebone.co.uk/wp/?p=3066">Coyote (Near to the Knuckle)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="https://sicklitmagazine.com/2016/07/20/counting-seasons-by-justin-hunter/">
          <img className="responsive-img" src={grave} alt="grave" />
        </a>
        <p><a className="pub-link" href="https://sicklitmagazine.com/2016/07/20/counting-seasons-by-justin-hunter/">Counting Seasons (Sick Lit Magazine)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://fireflymagazine.weebly.com/issue-8.html">
          <img className="responsive-img" src={motorcycle} alt="motorcycle" />
        </a>
        <p><a className="pub-link" href="http://fireflymagazine.weebly.com/issue-8.html">We're Not Friends (Firefly Magazine)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://frontporchrvw.com/issue/october-2016/article/the-dissociative-property">
          <img className="responsive-img" src={guy} alt="guy" />
        </a>
        <p><a className="pub-link" href="http://frontporchrvw.com/issue/october-2016/article/the-dissociative-property">The Dissociative Property (Front Porch Review)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://bit.ly/100VoicesV2">
          <img className="responsive-img" src={stairs} alt="stairs" />
        </a>
        <p><a className="pub-link" href="http://bit.ly/100VoicesV2">The Slammer (Centum Press)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="https://thedrabble.wordpress.com/2016/12/19/strip-mining/">
          <img className="responsive-img" src={mine} alt="mine" />
        </a>
        <p><a className="pub-link" href="https://thedrabble.wordpress.com/2016/12/19/strip-mining/">Strip Mining (The Drabble)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://peoples-ink.com/typehouse-literary-magazine/">
          <img className="responsive-img" src={arizona} alt="arizona" />
        </a>
        <p><a className="pub-link" href="http://peoples-ink.com/typehouse-literary-magazine/">Leaving Arizona (Typehouse Magazine)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://www.corev.ink/issues.html">
          <img className="responsive-img" src={sign} alt="sign" />
        </a>
        <p><a className="pub-link" href="http://www.corev.ink/issues.html">Shotgun Signs (Corvus Review)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="https://twistedsisterlitmag.com/2017/03/17/twistedsister-fiction-one-thousand-hours-free/">
          <img className="responsive-img" src={aol} alt="aol" />
        </a>
        <p><a className="pub-link" href="https://twistedsisterlitmag.com/2017/03/17/twistedsister-fiction-one-thousand-hours-free/">One Thousand Hours Free (Twisted Sister Lit Magazine)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="https://thejjoutrereview.com/the-review/volume-iii-issue-12/jump/">
          <img className="responsive-img" src={tree} alt="tree" />
        </a>
        <p><a className="pub-link" href="https://thejjoutrereview.com/the-review/volume-iii-issue-12/jump/">Jump (The J.J. Outré Review)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="https://storylandliteraryreview.wordpress.com/2017/08/11/how-to-be-a-man-by-justinhunter/">
          <img className="responsive-img" src={hand} alt="hand" />
        </a>
        <p><a className="pub-link" href="https://storylandliteraryreview.wordpress.com/2017/08/11/how-to-be-a-man-by-justinhunter/">How to be a Man (Storyland Literary Review)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://boinkzine.com/2017/08/04/seconds/">
          <img className="responsive-img" src={car} alt="car" />
        </a>
        <p><a className="pub-link" href="http://boinkzine.com/2017/08/04/seconds/">Seconds ((b)OINK)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://ghostparachute.com/issue/october-2017-issue/creosote/">
          <img className="responsive-img" src={creosote} alt="creosote" />
        </a>
        <p><a className="pub-link" href="http://ghostparachute.com/issue/october-2017-issue/creosote/">Creosote (Ghost Parachute)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="http://www.fiveonthefifth.com/vol-3-issue-1-story-5">
          <img className="responsive-img" src={zombie} alt="zombie" />
        </a>
        <p><a className="pub-link" href="http://www.fiveonthefifth.com/vol-3-issue-1-story-5">The Nothing (Five on Fifth)</a></p>
      </div>
      <div className="col s12 m6 card">
        <a href="https://bitterzoetmag.wordpress.com/">
          <img className="responsive-img" src={cactus} alt="cactus" />
        </a>
        <p><a className="pub-link" href="https://bitterzoetmag.wordpress.com/">Miracle Mile (Forthcoming Publication Bitterzoet Magazine)</a></p>
      </div>
    </div>
  </div>
    );
  }
}

export default Content;

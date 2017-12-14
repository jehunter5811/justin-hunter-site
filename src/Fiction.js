import React, { Component } from 'react';

class Fiction extends Component {

  constructor() {
    super();
    this.state = [
      {
        title: "The Girl in the Tarp",
        link: "http://www.awspublishing.com/fiction/186/the-girl-in-the-tarp/",
        publication: "AWS Publishing",
        img: "https://images.unsplash.com/photo-1424723457604-f92229539bad?auto=format&fit=crop&w=1778&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Army Men",
        link: "http://scars.tv/cgi-bin/works_e.pl?/home/users/web/b929/us.scars/perl/text-writings/g6396.txt",
        publication: "Down in the Dirt Magazine",
        img: "https://images.unsplash.com/photo-1446587081170-71f025fc7d91?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Scars",
        link: "http://scars.tv/cgi-bin/works_e.pl?/home/users/web/b929/us.scars/perl/text-writings/g6468.txt",
        publication: "Children, Churches, and Daddies",
        img: "https://images.unsplash.com/7/sunset-hair.jpg?auto=format&fit=crop&w=1353&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Dirt Roads",
        link: "http://nebula.wsimg.com/36aadaecd4bb5ab826ea975110759f6f?AccessKeyId=3C22B84D674D5BA7A77D&disposition=0&alloworigin=1",
        publication: "Corvus Review",
        img: "https://images.unsplash.com/photo-1437669514390-0eda00923cc8?auto=format&fit=crop&w=1778&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Coyote",
        link: "http://www.close2thebone.co.uk/wp/?p=3066",
        publication: "Near to the Knuckle",
        img: "https://images.unsplash.com/photo-1425141750113-187b6a13e28c?auto=format&fit=crop&w=1390&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Counting Seasons",
        link: "https://sicklitmagazine.com/2016/07/20/counting-seasons-by-justin-hunter/",
        publication: "Sick Lit Magazine",
        img: "https://images.unsplash.com/photo-1508032858763-eebd30e7d031?auto=format&fit=crop&w=1282&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "We're Not Friends",
        link: "http://fireflymagazine.weebly.com/issue-8.html",
        publication: "Firefly Magazine",
        img: "https://images.unsplash.com/photo-1466095834737-14d0fe2abe94?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "The Dissociative Property",
        link: "http://frontporchrvw.com/issue/october-2016/article/the-dissociative-property",
        publication: "Front Porch Review",
        img: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?auto=format&fit=crop&w=1267&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "The Slammer",
        link: "http://bit.ly/100VoicesV2",
        publication: "Centum Press",
        img: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?auto=format&fit=crop&w=1345&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Strip Mining",
        link: "https://thedrabble.wordpress.com/2016/12/19/strip-mining/",
        publication: "The Drabble",
        img: "https://images.unsplash.com/photo-1483638867541-6d87ce7f2d4d?auto=format&fit=crop&w=1000&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Leaving Arizona",
        link: "http://peoples-ink.com/typehouse-literary-magazine/",
        publication: "Typehouse Magazine",
        img: "https://images.unsplash.com/photo-1470164971321-eb5ac2c35f2e?auto=format&fit=crop&w=1354&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Shotgun Signs",
        link: "http://www.corev.ink/issues.html",
        publication: "Corvus Review",
        img: "https://images.unsplash.com/photo-1489928689380-3b404a485daa?auto=format&fit=crop&w=1355&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "One Thousand Hours Free",
        link: "https://twistedsisterlitmag.com/2017/03/17/twistedsister-fiction-one-thousand-hours-free/",
        publication: "Twisted Sister Lit Magazine",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/AOL_promotional_CDs_in_Canada.jpg/1280px-AOL_promotional_CDs_in_Canada.jpg"
      },
      {
        title: "Jump",
        link: "https://thejjoutrereview.com/the-review/volume-iii-issue-12/jump/",
        publication: "The J.J. Outré Review",
        img: "https://images.unsplash.com/photo-1501084291732-13b1ba8f0ebc?auto=format&fit=crop&w=1348&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "How to be a Man",
        link: "https://storylandliteraryreview.wordpress.com/2017/08/11/how-to-be-a-man-by-justinhunter/",
        publication: "Storyland Literary Review",
        img: "https://images.unsplash.com/photo-1495732403327-6dd9769668d1?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Seconds",
        link: "http://boinkzine.com/2017/08/04/seconds/",
        publication: "(b)OINK Magazine",
        img: "https://images.unsplash.com/photo-1472764214213-3e355980930a?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
      {
        title: "Creosote",
        link: "http://ghostparachute.com/issue/october-2017-issue/creosote/",
        publication: "Ghost Parachute",
        img: "http://ghostparachute.com/wp-content/uploads/2017/10/Creosote-Image-1000x1000.jpg"
      },
      {
        title: "Miracle Mile",
        link: "https://bitterzoetmag.com/2017/12/09/miracle-mile-by-justin-hunter/",
        publication: "Bitterzoet Magazine",
        img: "https://i.pinimg.com/736x/30/f8/71/30f8711009b09c22d5b41db9d7b63f8a--advertising-signs-neon-signs.jpg"
      },
      {
        title: "The Nothing",
        link: "http://www.fiveonthefifth.com/vol-3-issue-1-story-5",
        publication: "Five on Fifth",
        img: "https://images.unsplash.com/photo-1444146085469-2a4ef5a7e5fb?auto=format&fit=crop&w=1500&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
      },
    ];
  }

  renderPubs() {
    return this.state.map(pubs => {
      return (
        <a href={pubs.link} target="_blank">
        <div key={pubs.title} className="col s12">
          <div className="card hoverable">
            <div className="card-image">
              <img className="responsive-img" src={pubs.img} />
              <span className="card-title">{pubs.title}</span>
            </div>

            <div className="card-action">
              <a className="black-text" href="#">{pubs.publication}</a>
            </div>
          </div>
        </div>
        </a>



      );
    });
  }


  render() {
    return (
      <div>
      <div className="fiction-main">
        <h2 id="top" className="center-align">Fiction</h2>
        <div className="row">
          {this.renderPubs()}
        </div>
      </div>

        <div className="fixed-action-btn">
          <a href="#top" className="btn-floating btn-large white">
            <i className="large material-icons black-text">arrow_upward</i>
          </a>
        </div>

      </div>
    );
  }
}

export default Fiction;

import React, { Component } from 'react';

class Other extends Component {
  constructor() {
    super();
    this.state = [
      {
        title: "Podcast Roundup: Otherppl with Brad Listi",
        link: "http://minotaursspotlight.com/podcast-roundup-otherppl-with-brad-listi/?cn=cmVwbHk%3D",
        publication: "The Minotaur's Spotlight",
        blurb: "His interviews expose the fear, hesitation, and humanity in writing."
      },
      {
        title: "Avoiding Stereotypes When Writing Place (Even If That Place Is Home)",
        link: "https://litreactor.com/columns/avoiding-stereotypes-when-writing-place-even-if-that-place-is-home",
        publication: "LitReactor",
        blurb: "What happens when your own preconceived notions and deep-set stereotypes about a place seep into your writing? They pass on to your readers."
      },
      {
        title: "Why Remakes (including Stephen King's 'IT') Stoke Creative Storytelling",
        link: "https://litreactor.com/columns/why-remakes-including-stephen-kings-it-stoke-creative-storytelling",
        publication: "LitReactor",
        blurb: "Remakes revive. Hashtag that, put it on a t-shirt, embrace it."
      },
      {
        title: "The Inauthenticity of a Fuckless World",
        link: "https://litreactor.com/columns/the-inauthenticity-of-a-fuckless-world",
        publication: "LitReactor",
        blurb: "If the fucking Starbucks guy curses, then someone in your story who just go her hair ripped out in a clump while fighting a mutant monkey is sure as hell going to curse."
      },
      {
        title: "How to Finish Your Novel Using Math",
        link: "https://litreactor.com/columns/how-to-finish-your-novel-by-using-math",
        publication: "LitReactor",
        blurb: "As much as we writers like to chant the mantra of 'write every day,' it's not realistic or necessary."
      },
      {
        title: "Why You Should Be More Like Andy Weir",
        link: "https://litreactor.com/columns/why-you-should-be-more-like-andy-weir",
        publication: "LitReactor",
        blurb: "People who simply identify themselves as a writer may be putting the cart before the horse."
      },
      {
        title: "Why We Need Border Fiction More Than Ever",
        link: "https://litreactor.com/columns/why-we-need-border-fiction-more-than-ever",
        publication: "LitReactor",
        blurb: "If you find a moving piece of work from someone who shouts out the reality of life along the U.S/Mexico border, shout it out louder for them."
      },
      {
        title: "Turtle Power: Interview with Nick Gregorio, Debut Author of 'Good Grief'",
        link: "https://litreactor.com/interviews/turtle-power-interview-with-nick-gregorio-debut-author-of-the-novel-good-grief",
        publication: "LitReactor",
        blurb: "And I’ll say this: If you want to write, you’ll find the time to do it."
      },
    ];
  }

  renderPubs() {
    return this.state.map(pubs => {
      return (
        <a href={pubs.link} target="_blank">
        <div className="col s12 m6">
          <div className="card hoverable small white darken-1">
            <div className="card-content white-text">
              <span className="card-title black-text">{pubs.title}</span>
              <p className="black-text">{pubs.blurb}</p>
            </div>
            <div className="card-action">
              <a className="black-text">{pubs.publication}</a>
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
        <h2 id="top" className="center-align">Other Writing</h2>
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

export default Other;

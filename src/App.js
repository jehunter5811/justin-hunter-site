import React, { Component } from 'react';
import Content from "./Content";
import Contact from "./Contact";
import Blog from "./Blog";
import About from "./About";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      publications: true,
      blog: false,
      about: false,
      contact: false
    };
  }

  componentWillMount() {
    this.handleBlog = () => {
      this.setState({publications: false, blog: true, about: false, contact: false})
    }
    this.handlePub = () => {
      this.setState({publications: true, blog: false, about: false, contact: false})
    }
    this.handleContact = () => {
      this.setState({publications: false, blog: false, about: false, contact: true})
    }
    this.handleAbout = () => {
      this.setState({publications: false, blog: false, about: true, contact: false})
    }
  }

  renderContent() {
    if(this.state.blog === true) {
      return (
        <Blog />
      );
    } else if( this.state.about === true) {
      return (
        <About />
      );
    } else if (this.state.contact === true) {
      return(
        <Contact />
      );
    } else if (this.state.publications === true) {
      return (
        <Content />
      );
    }
  }
// <li><a onClick={this.handleBlog}>Blog</a></li>
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Justin Hunter</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={this.handlePub}>Published Work</a></li>

              <li><a onClick={this.handleAbout}>About</a></li>
              <li><a onClick={this.handleContact} className="waves-effect waves-light btn">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="App-intro">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default App;

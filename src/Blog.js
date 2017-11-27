import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class Blog extends Component {
  constructor() {
    super();
    this.state = {
      content: {}
    };
  }

  componentWillMount() {
    this.getData = () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jehunter5811"
      )
      .then(res => {
        this.setState({ content: res.data.items });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

componentDidMount() {
  this.getData();
  this.refresh = setInterval(() => this.getData(), 5000);
}

renderContent() {
  // var data = [this.state.content];
  // console.log(data);
  // <h4>{data}</h4>
}


  render() {
    return (
      <div className="container">
        <h1>Blog</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default Blog;

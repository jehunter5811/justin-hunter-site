import React, { Component } from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import './App.css';


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <ReactTypeformEmbed url={'https://justinhunter1.typeform.com/to/bIvck6'}/>
      </div>
    );
  }
}

export default Contact;

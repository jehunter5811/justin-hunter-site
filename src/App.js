import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Main from './Main';
import Software from './Software';
import About from './About';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Main} />
            <Route exact path="/software" component={Software} />
            <Route exact path="/about" component={About} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu';
//import { Navbar, Jumbotron, Button, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AboutMe />
          <Menu />     
          
        </div>
        <div className="content">
          I will update this page every so often
        </div>
        <div className="footer">
        </div>
      </div>

    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import NavBar from './ui/NavBar';
import Home from './container/Home';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar logo=" Atends " />
        {this.props.children}
      </div>
    );
  }
}

export default App;

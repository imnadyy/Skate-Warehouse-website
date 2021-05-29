import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Container from './components/board container/container';

class App extends Component {
  state = {  }
  render() { 
    return(
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}
 
export default App;
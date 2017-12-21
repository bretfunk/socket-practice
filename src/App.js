import React, { Component } from 'react';
import './App.css';
import { subscribeToTimer } from './Api.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet'
    };

    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }
  render() {
    return (
      <div className="App">
      <p className="App-intro">
      This is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;

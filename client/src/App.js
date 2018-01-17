import React, { Component } from 'react';
import JokeList from './components/JokeList';
import RandomJokeList from './components/RandomJokeList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>CheeZ Jokes!</h1>
        <JokeList title="Best" />
        <JokeList title="Worst" />
        <RandomJokeList />
      </div>
    );
  }
}

export default App;

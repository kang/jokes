import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';

class JokeList extends Component {
  constructor(props) {
    super(props);

    this.state = { jokes: [] };
  }

  componentDidMount() {
    fetch('/jokes/' + this.props.title.toLowerCase())
      .then(res => res.json())
      .then(jokes => this.setState({ jokes }));
  }

  render() {
    return (
      <div className="joke-list">
        <h3>{this.props.title}</h3>
        <div className="jokes-container">
          {this.state.jokes.map(joke => (
            <Joke key={joke.id} joke={joke} />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;

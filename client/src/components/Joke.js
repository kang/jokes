import React, { Component } from 'react';
import { downVote, upVote } from '../apiHelper';
import './Joke.css';

class Joke extends Component {
  constructor(props) {
    super(props);

    this.storage = JSON.parse(window.localStorage.jokeVotes || '{}');

    this.state = {
      hasVoted: this.storage[props.joke.id]
    };

    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.updateLocalStorage = this.updateLocalStorage.bind(this);
  }

  updateLocalStorage(type) {
    this.storage = JSON.parse(window.localStorage.jokeVotes || '{}');
    this.storage[this.props.joke.id] = type;
    window.localStorage.jokeVotes = JSON.stringify(this.storage);
  }

  upVote() {
    upVote(this.props.joke);
    this.updateLocalStorage('upVote');
    this.setState({ hasVoted: 'upVote' });
  }

  downVote() {
    downVote(this.props.joke);
    this.updateLocalStorage('downVote');
    this.setState({ hasVoted: 'downVote' });
  }

  render() {
    return (
      <div className="joke">
        <h4>{this.props.joke.joke}</h4>
        <div className="joke-buttons">
          <button onClick={this.upVote}
            disabled={this.state.hasVoted === 'upVote'}
          >
            👍
          </button>
          <button onClick={this.downVote}
            disabled={this.state.hasVoted === 'downVote'}
          >
            👎
          </button>
        </div>
      </div>
    );
  }
}

export default Joke;

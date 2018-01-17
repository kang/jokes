import React, { Component } from 'react';
import Joke from './Joke';
import './JokeList.css';

class RandomJokeList extends Component {
  constructor(props) {
    super(props);

    this.state = { jokes: [] };

    this.getRandomJokes = this.getRandomJokes.bind(this);
  }

  componentDidMount() {
    this.getRandomJokes();
  }

  render() {
    return (
      <div className="joke-list">
        <button onClick={this.getRandomJokes}>Random</button>
        <div className="jokes-container">
          {this.state.jokes.map(joke => (
            <Joke key={joke.id} joke={joke} />
          ))}
        </div>
      </div>
    );
  }

  getRandomJokes() {
    const page = Math.ceil(Math.random() * 13);

    fetch(`https://icanhazdadjoke.com/search?limit=30&page=${page}`, {
      headers: new Headers({ Accept: 'application/json' })
    })
      .then(res => res.json())
      .then(({ results }) => {
        const shuffledArr = results.sort(() => Math.random() - 0.5);

        this.setState({
          jokes: shuffledArr.slice(0, 20)
        })
      });
  }
}

export default RandomJokeList;

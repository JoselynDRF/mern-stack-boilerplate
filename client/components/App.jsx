import React, { Component } from 'react';
import axios from 'axios';
import './app.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      examples: [],
    };
  }

  componentWillMount() {
    axios
      .get('http://localhost:3000/api/examples')
      .then((response) => {
        const { examples } = response.data;
        this.setState({
          examples,
        });
      })
      .catch((error) => {
        console.log('GET error', error);
      });
  }

  render() {
    const examples = this.state.examples.map(example => (
      <li key={example.id}> {example.title} </li>
    ));

    return (
      <div>
        <h1> MERN Stack App </h1>
        <ul>
          {examples}
        </ul>
      </div>
    );
  }
}

export default App;

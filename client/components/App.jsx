import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:3000/api/users')
      .then((response) => {
        const users = response.data.users;
        this.setState({
          users: users
        });
      })
      .catch((error) => {
        console.log('GET error', error);
      });
  }

  render() {
    var users = this.state.users.map((user, i) => {
      return <li key={i}>{user.nombre}</li>
    });
    return(
      <div>
        <h1> Mi aplicación </h1>
        <ul>
          {users}
        </ul>
      </div>

    )
  }
}

export default App;

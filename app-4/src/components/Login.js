import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleUserChange(username) {
    this.setState({
      username
    })
  }

  handlePassChange(password) {
    this.setState({
      password
    })
  }

  handleClick() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input onChange={e => {this.handleUserChange(e.target.value)}} />
        <input onChange={e => {this.handlePassChange(e.target.value)}} />
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

export default Login;
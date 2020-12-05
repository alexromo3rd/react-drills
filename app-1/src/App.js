import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputMessage: '',
    }
  }

  handleChange(e) {
    this.setState({
      inputMessage: e.target.value
    })
  }

  render() {
      return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e)} />
        <p>{this.state.inputMessage}</p>
      </div>
    );
  }
}

export default App;

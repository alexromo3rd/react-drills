import React from 'react';
import Image from './components/Image';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      image: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop'
    }
  }
  render() {
    return (
      <div className="App">
        <Image sampleImage={this.state.image}/>
      </div>
    );
  }
}

export default App;

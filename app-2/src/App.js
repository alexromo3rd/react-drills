import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      randomArray: ['This', 'is', 'just', 'some', 'random', 'string', 'array']
    }
  }

  render() {
    const displayArray = this.state.randomArray.map(element => {
      return(
        <h2>{element}</h2>
      )
    })

    return (
      <div className="App">
        {displayArray}    
      </div>
    );
  }
}

export default App;

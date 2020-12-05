import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filterString: '',
      randomArray: ['This', 'is', 'just', 'some', 'random', 'string', 'array']
    }
  }

  handleChange(value) {this.setState({
      filterString: value
    })
  }

  render() {
    const filteredStringArray = this.state.randomArray.filter((element) => {
      return (
        element.includes(this.state.filterString)
      )
    }).map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })
    
    return (
      <div className="App">
        <input onChange={e => {this.handleChange(e.target.value)}} />
        {filteredStringArray}
      </div>
    );
  }
}

export default App;

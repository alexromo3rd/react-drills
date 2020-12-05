import React from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      todos: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(task) {
    this.setState({
      userInput: task
    })
  }

  handleClick() {
    this.setState({
      todos: [...this.state.todos, this.state.userInput],
      userInput: ''
    })
  }

  render() {
    const tasks = this.state.todos.map((element, index) => {
      return(
        <Todo key={index} todo={element}/>
      )
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.userInput} placeholder="Enter new task" onChange={e => this.handleChange(e.target.value)} />
        <button onClick={this.handleClick}>Add</button>
        {tasks}
      </div>
    );
  }
}

export default App;

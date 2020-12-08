import React from 'react';
import NewTask from './components/NewTask';
import List from './components/List';
import './App.css';

// The App component should be responsible for getting new tasks and storing the list of tasks.
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    }

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List list={this.state.tasks} />
      </div>
    );
  }
}

export default App;

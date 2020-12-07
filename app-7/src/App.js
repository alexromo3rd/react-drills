import React from 'react';
import NewTask from './components/NewTask';
import './App.css';

// The App component should be responsible for getting new tasks and storing the list of tasks.
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
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
        <NewTask add={this.handleAddTask} />
      </div>
    );
  }
}

export default App;

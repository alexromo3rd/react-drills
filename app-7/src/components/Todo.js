import React, { Component } from 'react';

// The Todo component should be responsible for displaying the individual tasks from the App component.
class Todo extends Component {
    render(props) {
        return(
            <p>{this.props.task}</p>
        )
    }
}

export default Todo;
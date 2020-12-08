import React, { Component } from 'react';
import Todo from './Todo';

// List should be responsible for display the tasks inside of a task array on the App component in a list-like fashion.
class List extends Component {
    render() {
        const list = this.props.list.map(element => {
            return(
                <Todo task={element} />
            )
        })
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default List;
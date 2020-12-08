import React, { Component } from 'react';

// NewTask should be responsible for adding a new task to a task array on the App component.
class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(value) {
        this.setState({
            input: value
        })
    }
    
    handleAdd() {
        this.props.add(this.state.input);
        this.setState({
            input: ''
        })
    }

    render(props) {
        return(
            <div>
                <input
                    value={this.state.input}
                    placeholder="Enter new task"
                    onChange={e => this.handleChange(e.target.value)}
                />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}

export default NewTask;
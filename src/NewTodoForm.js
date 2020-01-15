import React, { Component } from 'react';
import uuid from "uuid/v4";
import './NewTodoForm.css';

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if(this.state.task === '') {
      alert('Please enter new todo!');
    } else {
      this.props.createTodo({ ...this.state, id: uuid(), completed: false });
      this.setState({ task: '' });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <div>
          <input
            type="text"
            placeholder="New Todo"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
        </div>
        <button>Add Todo</button>
      </form>
    )
  }
}

export default NewTodoForm;
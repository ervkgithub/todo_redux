import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodoAction } from "../../actions/addTodoAction";

class AddTodo extends Component {
  addTodo(event) {
    if (event.key === "Enter") {
      this.props.addTodo({ workName: event.target.value });
      event.target.value = null;
    }
  }

  render() {
    return (
      <div className="todo_wrapper">
        <h3>ToDo Redux App</h3>
        <input
          type="text"
          className="todo_input"
          placeholder="Enter ToDo Item List..."
          onKeyDown={(event) => this.addTodo(event)}
        />
      </div>
    );
  }
}

const mapDistachToProps = () => (dispatch) => {
  return bindActionCreators({ addTodo: addTodoAction }, dispatch);
};

export default connect(null, mapDistachToProps)(AddTodo);

import React, { Component } from 'react';
import TodoList from './components/todoList/todoList';
import AddTodo from './components/addTodo/addTodo';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="todo_container">
            <AddTodo className="todo_input" />
            <div className="separator"></div>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

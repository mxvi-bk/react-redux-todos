import React, { Component } from "react";
import ListTodo from "./components/listTodo";
import InputTodo from "./components/inputTodo";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTodo: [
        {
          id: 1,
          text: "Cras justo odio"
        }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  addTodo(text) {
    if (!text) return;
    this.setState(state => ({
      listTodo: [
        ...state.listTodo,
        {
          id: state.listTodo[state.listTodo.length - 1].id + 1,
          text: text
        }
      ]
    }));
  }
  removeTodo(id) {
    if (!id) return;
    this.setState(state => ({
      listTodo: state.listTodo.filter(todo => todo.id !== id)
    }));
  }
  changeStatus(id, status) {
    if (!id) return;
    this.setState(state => ({
      listTodo: state.listTodo.map(todo => {
        if (todo.id === id) {
          todo.status = status;
        }
        return todo;
      })
    }));
  }
  render() {
    return (
      <div className="App container">
        <ListTodo changeStatus={this.changeStatus} />
        <br />
        <InputTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

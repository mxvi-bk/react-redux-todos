import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import { FaTrash, FaCheck, FaUndo } from "react-icons/fa";
import { connect } from "react-redux";
import { removeTodo } from "../actions";

const mapStateToProps = state => ({
  todos: state.todos
});

class ListTodo extends Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
    this.changeStatus = props.changeStatus;
  }
  componentDidMount() {
    console.log(removeTodo(1));
  }
  render() {
    const listTodo = this.props.todos.map(todo => (
      <ListGroup.Item
        key={todo.id}
        active={todo.status === "done" ? true : false}
      >
        {todo.status === "done" ? (
          <FaUndo
            className="icon icon-check"
            onClick={() => this.props.changeStatus(todo.id, "pending")}
          />
        ) : (
          <FaCheck
            className="icon icon-check"
            onClick={() => this.props.changeStatus(todo.id, "done")}
          />
        )}

        {todo.text}

        <FaTrash
          className="icon icon-trash"
          onClick={() => this.dispatch(removeTodo(todo.id))}
        />
      </ListGroup.Item>
    ));

    return (
      <div className="listTodo row">
        <div className="col-md-12 no-padding">
          <ListGroup>{listTodo}</ListGroup>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListTodo);

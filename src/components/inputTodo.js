import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.dispatch = props.dispatch;
    this.bindInput = this.bindInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  bindInput(text) {
    this.setState(state => ({
      input: text
    }));
  }
  clearInput() {
    this.setState(state => ({
      input: ""
    }));
  }
  render() {
    return (
      <div className="inputTodo row">
        <input
          type="text"
          className="form-control col-sm-12"
          value={this.state.input}
          onChange={e => {
            this.bindInput(e.target.value);
          }}
        />
        <Button
          variant="danger"
          className="col-sm-6"
          onClick={() => this.clearInput()}
        >
          Clear
        </Button>
        <Button
          variant="success"
          className="col-sm-6"
          onClick={() => this.dispatch(addTodo(this.state.input))}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default connect()(InputTodo);

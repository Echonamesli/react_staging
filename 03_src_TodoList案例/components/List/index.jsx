import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import Item from "../Item";

export default class List extends Component {
  //对接收的props进行类型、必要性的限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          //等价于 return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} />
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}

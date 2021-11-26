import React, { useState } from "react";
import TodoForm from "../Components/TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodos = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodos={completeTodos}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default TodoList;

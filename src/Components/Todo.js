import React from "react";
// import TodoForm from "./TodoForm";

function Todo({ todos, completeTodos, removeTodo }) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: "",
//   });
  return todos.map((todo, index) => (
    <>
      <div>
        <div>{todo.text}</div>
        <span onClick={() => removeTodo(todo.id)}>Cross</span>
      </div>
    </>
  ));
}

export default Todo;

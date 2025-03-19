import React, { useState } from "react";

const TodoInput = (props) => {
  const { handleAddTodos } = props;

  const [todoValue, setTodoValue] = useState("");

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        type="text"
        placeholder="Add a Todo.."
        
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("")
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;

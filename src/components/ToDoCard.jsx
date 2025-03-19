import React from "react";

const ToDoCard = (props) => {
  const { children, handleDeleteTodo, index } = props;
  return (
    <li>
      {children}
      <div className="actionsContainer">
        <button >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
            handleDeleteTodo(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default ToDoCard;

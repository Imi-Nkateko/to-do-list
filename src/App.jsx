import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {


  const [todos, setTodos] = useState([
   
  ]);

  function handleAddTodos(newTodo) {
    // ...todo spreads our previous todo and newTodo adds a newTod
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {}


  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
        <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo}/>
    </>
  );
}

export default App;

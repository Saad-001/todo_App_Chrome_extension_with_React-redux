import React, { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [showTodoForm, setShowTodoForm] = useState("dontShow");

  const handleClick = () => {
    setShowTodoForm((prevState) => !prevState);
  };

  return (
    <div className="text-center">
      <TodoList />
      {!showTodoForm ? <TodoForm /> : ""}
      <button
        onClick={handleClick}
        className="p-3 bg-slate-500 text-white font-medium mt-10"
      >
        {!showTodoForm ? "hide todo form" : "add new todo"}
      </button>
    </div>
  );
}

export default App;

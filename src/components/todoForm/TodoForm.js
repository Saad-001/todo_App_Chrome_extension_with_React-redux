import React, { useState } from "react";
import { store } from "../../app/store";
import { addTodo } from "../../features/toDoList/toDoReducer";

const TodoForm = () => {
  const [todoInstance, setTodoInstance] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    todoInstance[e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(addTodo(todoInstance));
    setTodoInstance({
      title: "",
      description: "",
    });
    e.target.reset();
  };

  return (
    <div className="max-w-lg mx-auto bg-slate-500 p-5">
      <h1 className="text-4xl text-white text-center font-semibold mb-5">
        Create a Todo
      </h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="p-2 ">
          <input
            className="p-2 border-0 focus:outline-none"
            type="text"
            name="title"
            id=""
            placeholder="Add a title"
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <input
            className="p-2 border-0 focus:outline-none"
            type="text"
            name="description"
            placeholder="Add a description"
            onChange={handleChange}
          />
        </div>
        <div className="p-2">
          <input
            className="p-2 cursor-pointer font-medium border border-gray-500 bg-white"
            type="submit"
            value="Create Todo"
          />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;

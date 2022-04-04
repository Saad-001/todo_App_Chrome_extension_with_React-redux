import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { store } from "../../app/store";
import { deleteTodo, updateTodo } from "../../features/toDoList/toDoReducer";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [showEditForm, setShowEditForm] = useState("dontShow");

  const updatedTodoInstance = {
    title: "",
    description: "",
  };

  store.subscribe(() => {
    setTodos(store.getState().reducer);
  });

  const handleEdit = () => {
    setShowEditForm((prevState) => !prevState);
  };

  const handleDelete = (id) => {
    store.dispatch(deleteTodo({ id: id }));
  };

  const handleBlur = (e) => {
    updatedTodoInstance[e.target.name] = e.target.value;
  };

  const handleSubmit = (id, e) => {
    e.preventDefault();
    store.dispatch(updateTodo({ ...updatedTodoInstance, id: id }));
    e.target.reset();
  };

  return (
    <div className="mb-10">
      {!todos.length ? (
        <h1 className="text-2xl font-medium text-white bg-slate-500 p-5">
          Your to-do list is empty. Please add a todo to keep remembering your
          daily tasks.
        </h1>
      ) : (
        todos.map((todo, index) => (
          <div key={index} className=" bg-slate-500 p-5 space-y-4">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-white">
                Title: {todo.title}
              </h1>
              <h1 className="text-xl font-medium text-white">
                description: {todo.description}
              </h1>
              {!showEditForm ? (
                <form
                  className="mt-2 flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 justify-center mx-auto lg:max-w-xl"
                  onSubmit={(e) => {
                    handleSubmit(todo.todoId, e);
                  }}
                >
                  <input
                    className="p-2 border-0 focus:outline-none"
                    type="text"
                    name="title"
                    id=""
                    placeholder="edit title"
                    onBlur={handleBlur}
                  />
                  <input
                    className="p-2 border-0 focus:outline-none"
                    type="text"
                    name="description"
                    id=""
                    placeholder="edit description"
                    onBlur={handleBlur}
                  />
                  <input
                    className="p-2 cursor-pointer font-medium border border-gray-500 bg-white"
                    type="submit"
                    value="update todo"
                  />
                </form>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center justify-center space-x-3">
              <FiEdit
                className="text-2xl text-white cursor-pointer"
                onClick={handleEdit}
              />
              <RiDeleteBinLine
                className="text-2xl text-white cursor-pointer"
                onClick={() => {
                  handleDelete(todo.todoId);
                }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;

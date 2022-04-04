import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const todoListSlice = createSlice({
  name: "todoList",
  initialState: [],
  reducers: {
    addTodo: (todos, action) => {
      todos.push({
        todoId: ++lastId,
        title: action.payload.title,
        description: action.payload.description,
      });
    },
    updateTodo: (todos, action) => {
      const matchedTodo = todos.find(
        (todo) => todo.todoId === action.payload.id
      );
      if (action.payload.title && action.payload.description) {
        matchedTodo.title = action.payload.title;
        matchedTodo.description = action.payload.description;
      } else if (action.payload.title) {
        matchedTodo.title = action.payload.title;
      } else if (action.payload.description) {
        matchedTodo.description = action.payload.description;
      } else {
        return [...matchedTodo];
      }
    },
    deleteTodo: (todos, action) => {
      return todos.filter((todo) => todo.todoId !== action.payload.id);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;

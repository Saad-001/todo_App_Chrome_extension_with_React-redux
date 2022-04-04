import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/toDoList/toDoReducer";

export const store = configureStore({
  reducer: {
    reducer,
  },
});

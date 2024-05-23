import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types/typesTodo";


const todo = createSlice({
  name: 'todo',
  initialState: {
    todos: [] as Todo[]
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, removeTodo } = todo.actions;
export default todo.reducer
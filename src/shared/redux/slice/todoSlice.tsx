import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types/typesTodo";

interface TodoStore {
  todos: Todo[],
  idEdit: string | null,
}

const initialState : TodoStore = {
  todos: [],
  idEdit: null
}

const todo = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    editTodo: (state, action: PayloadAction<{index: number, title: string, description: string}>) => {
      state.todos[action.payload.index] = {
        ...state.todos[action.payload.index],
        title: action.payload.title,
        description: action.payload.description
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    setModal: (state, action: PayloadAction<string | null>) => {
      state.idEdit = action.payload
    }
  }
})

export const { addTodo, removeTodo, setModal, editTodo } = todo.actions;
export default todo.reducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../types/typesTodo";

interface TodoStore {
  todos: Todo[],
  idEdit: string | null,
}

const initialState: TodoStore = {
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
    editTodo: (state, action: PayloadAction<{ id: string, title: string, description: string }>) => {
      const index = state.todos.findIndex(item => item.id === action.payload.id);
      if (index !== 1) {
        state.todos[index] = {
          ...state.todos[index],
          title: action.payload.title,
          description: action.payload.description
        }
      }
      state.idEdit = null;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    setModal: (state, action: PayloadAction<string | null>) => {
      state.idEdit = action.payload;
    },
    clearModal: (state) => {
      state.idEdit = null
    },
  }
})

export const { addTodo, removeTodo, setModal, editTodo, clearModal } = todo.actions;
export default todo.reducer
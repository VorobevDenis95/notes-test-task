import { nanoid } from "@reduxjs/toolkit"
import { Todo } from "../../../shared/types/typesTodo"

export function createTodo(title?: string, description?: string) : Todo {
  return {
    id: nanoid(),
    title: title ? title : '',
    description: description ? description : '',
    completed: false,
    date: `${new Date().getDate()}`,
  }
}
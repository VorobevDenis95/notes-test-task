interface Todo {
  id: number,
  date: Date,
  title?: string,
  description?: string,
  completed: boolean
}

interface TodoItemProps {
  item: Todo,
}

interface TodoListProps {
  todos: Todo[]
}

export type {Todo, TodoItemProps, TodoListProps}
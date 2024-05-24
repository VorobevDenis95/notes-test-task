interface Todo {
  id: string,
  date: string,
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

interface EditTodoProps {
  title: string;
  description: string;
  id: string
}

export type {
  Todo, TodoItemProps, TodoListProps,
  EditTodoProps,
}


import './App.css'
import NewTodo from './components/Todo/NewTodo/NewTodo';
import Todos from './components/Todo/Todos/Todos';
import { Todo } from './shared/types/typesTodo'

function App() {

  const data : Todo[] = [
    {
      id: 1,
      date: new Date(),
      title: 'Todo 1',
      description: 'Todo 1 description',
      completed: false
    },
    {
      id: 2,
      date: new Date(),
      title: 'Todo 1',
      description: 'Todo 1 description',
      completed: false
    },
    {
      id: 3,
      date: new Date(),
      title: 'Todo 1',
      description: 'Todo 1 description',
      completed: false
    },
    {
      id: 4,
      date: new Date(),
      title: 'Todo 1',
      description: 'Todo 1 description',
      completed: false
    },
  ];



  return (
    <>
      <NewTodo />
      <Todos todos={data} />
    </>
  )
}

export default App

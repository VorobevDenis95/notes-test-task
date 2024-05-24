import { RouterProvider } from 'react-router-dom';
import './App.css'
// import { Todo } from './shared/types/typesTodo'
import {router} from './shared/router/router';

function App() {

  // const data : Todo[] = [
  //   {
  //     id: 1,
  //     date: new Date(),
  //     title: 'Todo 1',
  //     description: 'Todo 1 description',
  //     completed: false
  //   },
  //   {
  //     id: 2,
  //     date: new Date(),
  //     title: 'Todo 1',
  //     description: 'Todo 1 description',
  //     completed: false
  //   },
  //   {
  //     id: 3,
  //     date: new Date(),
  //     title: 'Todo 1',
  //     description: 'Todo 1 description',
  //     completed: false
  //   },
  //   {
  //     id: 4,
  //     date: new Date(),
  //     title: 'Todo 1',
  //     description: 'Todo 1 description',
  //     completed: false
  //   },
  // ];



  return (
    <RouterProvider router={router} />
  )
}

export default App

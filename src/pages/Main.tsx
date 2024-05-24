import NewTodo from "../components/Todo/NewTodo/NewTodo";
import Todos from "../components/Todo/Todos/Todos";
import Modal from "../components/modal/Modal";
import './Main.css'

const Main = () => {

  return (
    <main className="main">
      <Modal />
      <NewTodo />
      <Todos />
    </main>
  )
}

export default Main;
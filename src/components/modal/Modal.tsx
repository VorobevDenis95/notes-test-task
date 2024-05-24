import { useEffect, useState } from "react";
import { useAppSelector } from "../../shared/redux/redux-hooks"
import EditTodo from "./EditTodo";

const Modal = () => {

  const {idEdit, todos} = useAppSelector((state) => state.todo);
  const [findElement, setFindElement] = useState(todos.findIndex((todo) => todo.id === idEdit));

  useEffect(() => {
    setFindElement(todos.findIndex((todo) => todo.id === idEdit))
  }, [idEdit])

  return (
    <>
      {findElement !== -1 && <EditTodo id={todos[findElement].id} 
      title={todos[findElement].title!} 
      description={todos[findElement].description!}/>}
    </>
  )
}

export default Modal
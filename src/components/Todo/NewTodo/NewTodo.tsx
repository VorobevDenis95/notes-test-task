import InputTodoDescription from '../../Input/InputTodoDescription/InputTodoDescription';
import InputTodoTitle from '../../Input/InputTodoTitle/InputTodoTitle';
import './NewTodo.css';
import { ChangeEvent, useEffect, useRef, useState } from "react";

const NewTodo = () => {

  const [isActive, setIsActive] = useState(false);

  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
  }

  const todoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handlerOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handlerOutsideClick);
    }

  }, [isActive]);


  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionValue(e.target.value);
  }
  const handleNewTodo = () => {
    !isActive && setIsActive(true);
  }

  const handlerOutsideClick = (e: MouseEvent) => {
    if (todoRef.current && !todoRef.current.contains(e.target as Node) && isActive) {
      setIsActive(false);
    }
  }

  return (
    <div ref={todoRef}
      className={`new-todo ${isActive ? 'new-todo-active' : ''}`}
      onClick={handleNewTodo}>

      {!isActive && <h2>Нажмите, чтобы создать новую заметку</h2>}
      {
        isActive &&
        <form
          className='new-todo-body'>
          <InputTodoTitle value={titleValue}
            changeInput={handleChangeTitle} />
          <InputTodoDescription value={descriptionValue}
            changeInput={handleChangeDescription} />
        </form>
      }
    </div>
  )

}
export default NewTodo;
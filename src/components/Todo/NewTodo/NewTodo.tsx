import InputTodoDescription from '../../Input/InputTodoDescription/InputTodoDescription';
import InputTodoTitle from '../../Input/InputTodoTitle/InputTodoTitle';
import './NewTodo.css';
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { createTodo } from './utils';
import { useAppDispatch } from '../../../shared/redux/redux-hooks';
import { addTodo } from '../../../shared/redux/slice/todoSlice';

const NewTodo = () => {

  const [isActive, setIsActive] = useState(false);
  const [isSend, setSend] = useState(false);

  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitleValue(e.target.value);
  }

  const todoRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousedown", handlerOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handlerOutsideClick);
    }

  }, [isActive]);


  useEffect(() => {
    if (isSend) {
      sendTodo();
      setSend(false);
    }
  }, [isSend]);


  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionValue(e.target.value);
  }
  const handleNewTodo = () => {
    !isActive && setIsActive(true);
  }

  const handlerOutsideClick = (e: MouseEvent) => {
    if (todoRef.current && !todoRef.current.contains(e.target as Node) && isActive) {
      setSend(true);
      setIsActive(false);
    }
  }

  const sendTodo = () => {
    if (titleValue || descriptionValue) {
      const todo = createTodo(titleValue, descriptionValue); 
      setTitleValue('');
      setDescriptionValue('');
      dispatch(addTodo(todo));
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
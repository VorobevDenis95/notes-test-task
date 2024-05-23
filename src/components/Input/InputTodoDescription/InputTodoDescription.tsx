import { useEffect, useRef } from 'react';
import { InputTodoProps } from '../../../shared/types/typesInput';
import { capitalize, changeHeight } from '../utils';
import './InputTodoDescription.css'

const InputTodoDescription = ({value, changeInput} :InputTodoProps) => {

  const myInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (myInput.current)
    changeHeight(myInput.current);
  }, [value]);

  // const handleTextareaChange = (event) => {
  //   // setText(event.target.value);
  //   event.target.style.height = 'auto';
  //   event.target.style.height = (event.target.scrollHeight) + 'px';
  // };

  return (
    <div className="todo-description-input">
      <textarea
      ref={myInput} 
      className='todo-textarea' 
      placeholder='Заметка...' 
      // onChange={(e) => handleTextareaChange(e)}
      onChange={(e) => changeInput(e)}
      value={capitalize(value)} 
      />
    </div>
  )
}

export default InputTodoDescription;
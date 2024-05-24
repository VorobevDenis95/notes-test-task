import { useEffect, useRef } from 'react';
import { InputTodoProps } from '../../../shared/types/typesInput';
import { capitalize, changeHeight } from '../utils';
import './InputTodoDescription.css'

const InputTodoDescription = ({ value, changeInput }: InputTodoProps) => {

  const myInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (myInput.current)
      changeHeight(myInput.current);
  }, [value]);

  return (
    <div className="todo-description-input">
      <textarea
        ref={myInput}
        className='todo-textarea'
        placeholder='Заметка...'
        onChange={(e) => changeInput(e)}
        value={capitalize(value)}
      />
    </div>
  )
}

export default InputTodoDescription;
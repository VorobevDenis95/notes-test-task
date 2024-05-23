import { InputTodoProps } from "../../../shared/types/typesInput";
import './InputTodoTitle.css'
import { capitalize, changeHeight } from "../utils";
import { useEffect, useRef } from "react";

const InputTodoTitle = ({value, changeInput} :InputTodoProps) => {
  

  const myInput = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    if (myInput.current)
      changeHeight(myInput.current);
  }, [value])
  
  return (
    <div className="todo-title-input">
      <textarea 
      onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
      className="todo-textarea" 
      ref={myInput}
      rows={1} placeholder="Введите название заметки" 
      onChange={(e) => changeInput(e)}
      value={capitalize(value)} />
    </div>
  )
}

export default InputTodoTitle;
import './NewTodo.css';
import { useState } from "react";


const NewTodo = () => {
  
  const [isActive, setIsActive] = useState(false);
  
  const handleNewTodo = () => {
    !isActive && setIsActive(true);
  }

  return (
    <div className="new-todo"
    onClick={handleNewTodo}>
      <h2>Нажмите, чтобы создать новую заметку</h2>
    </div>
  )
}

export default NewTodo;
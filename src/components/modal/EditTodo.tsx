import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import InputTodoDescription from "../Input/InputTodoDescription/InputTodoDescription";
import InputTodoTitle from "../Input/InputTodoTitle/InputTodoTitle";
import { useAppDispatch } from "../../shared/redux/redux-hooks";
import { editTodo } from "../../shared/redux/slice/todoSlice";

interface EditTodoProps {
  title: string;
  description: string;
  id: string
}

const EditTodo = ({title, description, id} : EditTodoProps) => {

  const [valueTitle, setValueTitle] = useState(title);
  const [valueDescription, setValueDescription] = useState(description);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setValueTitle(title);
    setValueDescription(description);
  }, [title, description])


  const handleChangeTodoTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValueTitle(e.target.value);
  }

  const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValueDescription(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo({
      id,
      title: valueTitle,
      description: valueDescription
    }))
    
  }


  return (
    <div className="modal">
      <form className="modal__container">
        <InputTodoTitle value={valueTitle} changeInput={handleChangeTodoTitle}/>
        <InputTodoDescription value={valueDescription} changeInput={handleChangeDescription}/>
        <button>Отмена</button>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}

export default EditTodo;
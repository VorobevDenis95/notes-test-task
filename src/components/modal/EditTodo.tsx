import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import InputTodoDescription from "../Input/InputTodoDescription/InputTodoDescription";
import InputTodoTitle from "../Input/InputTodoTitle/InputTodoTitle";
import { useAppDispatch } from "../../shared/redux/redux-hooks";
import { clearModal, editTodo } from "../../shared/redux/slice/todoSlice";
import './EditTodo.css';
import { EditTodoProps } from "../../shared/types/typesTodo";

const EditTodo = ({ title, description, id }: EditTodoProps) => {

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

  const closeModal = () => {
    dispatch(clearModal());
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} 
      className="modal__container">
        <div>
          <InputTodoTitle value={valueTitle} changeInput={handleChangeTodoTitle} />
          <InputTodoDescription value={valueDescription} changeInput={handleChangeDescription} />
        </div>
        <div className="modal__container-btn">
          <button className="toolbar-button" onClick={closeModal}>Отмена</button>
          <button className="toolbar-button" type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  )
}

export default EditTodo;
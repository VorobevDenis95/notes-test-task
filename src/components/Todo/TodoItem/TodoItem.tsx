import { TodoItemProps } from "../../../shared/types/typesTodo";
import './TodoItem.css'

const TodoItem = ({item} : TodoItemProps) => {

  return (
      <div className="todo">
        {item.title && <h2>{item.title}</h2>}
        {item.description && <p>{item.description}</p>}
      </div>
    )
}

export default TodoItem;
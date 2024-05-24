import { TodoItemProps } from "../../../shared/types/typesTodo";
import Toolbar from "../Toolbar/Toolbar";
import './TodoItem.css'

const TodoItem = ({item} : TodoItemProps) => {

  return (
      <div className="todo-item">
        <div>
          {item.title && <h2>{item.title}</h2>}
          {item.description && <p>{item.description}</p>}
        </div>
        <Toolbar id={item.id} />
      </div>
    )
}

export default TodoItem;
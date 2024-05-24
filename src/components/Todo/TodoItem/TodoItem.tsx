import { TodoItemProps } from "../../../shared/types/typesTodo";
import Toolbar from "../Toolbar/Toolbar";
import './TodoItem.css'

const TodoItem = ({item} : TodoItemProps) => {

  return (
      <div className="todo-item">
        <div>
          {item.title && <h2>{item.title}</h2>}
          {item.description && <pre >{item.description}</pre>}
        </div>
        <Toolbar id={item.id} />
      </div>
    )
}

export default TodoItem;
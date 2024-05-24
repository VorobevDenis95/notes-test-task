import { useAppSelector } from '../../../shared/redux/redux-hooks';
// import { TodoListProps } from '../../../shared/types/typesTodo';
import TodoItem from '../TodoItem/TodoItem';
import './Todos.css';

const Todos = () => {
  
  const {todos} = useAppSelector((state) => state.todo)

  return (
    <>
    <div className="todos">
      {todos.map((todo) => <TodoItem key={todo.id} item={todo}/>)}
    </div>
    
    </>
  )
}

export default Todos;
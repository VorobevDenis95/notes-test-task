import { useAppDispatch } from '../../../shared/redux/redux-hooks';
import { removeTodo, setModal } from '../../../shared/redux/slice/todoSlice';
import ButtonToolbar, { BtnToolbarType } from './ButtonToolbar/ButtonToolbar';
import './Toolbar.css';


interface ToolbarProps {
  id: string,
}
const Toolbar = ({id} : ToolbarProps) => {

  const dispatch = useAppDispatch();

  const handleBtnClick = (id: string, type: BtnToolbarType) => {
    if (type === 'edit') {
      dispatch(setModal(id))
    } 
    if (type === 'delete') {
      console.log(id)
      dispatch(removeTodo(id));  
    }
  }

  return (
    <div className="toolbar">
      <ButtonToolbar id={id} type='edit' onClickBtn={handleBtnClick}/>
      <ButtonToolbar id={id} type='delete' onClickBtn={handleBtnClick}/>
    </div>
  )
}

export default Toolbar;
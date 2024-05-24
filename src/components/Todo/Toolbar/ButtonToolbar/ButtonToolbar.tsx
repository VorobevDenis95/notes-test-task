import { useEffect, useState } from "react";

interface ButtonToolbarProps {
  id: string;
  onClickBtn: (id: string, type: BtnToolbarType) => void;
  type: BtnToolbarType;
}

export type BtnToolbarType = 'edit' | 'delete';

const ButtonToolbar = ({id, onClickBtn, type} : ButtonToolbarProps) => {

  const [title, setTitle] = useState(type === 'edit' ? 'Edit' : 'Delete');

  useEffect(() => {
    setTitle(type === 'edit' ? 'Edit' : 'Delete');
  }, [type])

  return (
    <button onClick={() => onClickBtn(id, type)}
    className="toolbar-button" >
      {title}
    </button>
  )
}

export default ButtonToolbar;
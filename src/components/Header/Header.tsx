import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <header className="header__container">
        <Link className='header__link' to='/'>LOGO</Link>
      </header>
    </header>
  )
}

export default Header;
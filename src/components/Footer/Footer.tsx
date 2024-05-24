import './Footer.css';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>LOGO</span>
        <span>{year} WEB</span>
      </div>
    </footer>
  )
}

export default Footer;
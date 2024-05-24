import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import './Error.css';

const Error = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="error">
          <span>Произошла ошибка!</span>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Error;
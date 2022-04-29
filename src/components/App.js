import team from '../images/logo-awesome-profile-cards.svg';

import { Routes, Route, Link } from 'react-router-dom';
import '../styles/App.scss';
import Card from './card/Card';
import Footer from './layout/Footer';
function App() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<Card />} />
      </Routes>
      <main className="wrapper page">
        <section className="landing">
          <img
            className="landing__logo"
            src={team}
            alt="Logo Awesome profile-cards"
          />
          <h2 className="landing__title">Crea tu tarjeta de visita</h2>
          <p className="landing__text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <ul className="landing__function">
            <li className="landing__function--li">
              <i className="fa-regular fa-object-ungroup fa-xl"></i>Diseña
            </li>
            <li className="landing__function--li">
              <i className="fa-regular fa-keyboard fa-xl"></i>Rellena
            </li>
            <li className="landing__function--li">
              <i className="fa-solid fa-share-nodes fa-xl"></i>Comparte
            </li>
          </ul>
        </section>
        <Link className="button" to="/card" title="ir a crear tarjetas">
          Comenzar
        </Link>
      </main>

      <Footer />
    </>
  );
}

export default App;

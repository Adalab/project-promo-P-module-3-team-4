import '../styles/App.scss';
import team from '../images/logo-awesome-profile-cards.svg';
import Footer from './layout/Footer';
import Card from './card/Card';

function App() {
  return (
    <>
      <main class="wrapper page">
        <section class="landing">
          <img
            class="landing__logo"
            src={team}
            alt="Logo Awesome profile-cards"
          />
          <h2 class="landing__title">Crea tu tarjeta de visita</h2>
          <p class="landing__text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <ul class="landing__function">
            <li class="landing__function--li">
              <i class="fa-regular fa-object-ungroup fa-xl"></i>Diseña
            </li>
            <li class="landing__function--li">
              <i class="fa-regular fa-keyboard fa-xl"></i>Rellena
            </li>
            <li class="landing__function--li">
              <i class="fa-solid fa-share-nodes fa-xl"></i>Comparte
            </li>
          </ul>
        </section>
        <a class="button" href={Card} title="ir a crear tarjetas">
          Comenzar
        </a>
      </main>
      <Footer />
    </>
  );
}

export default App;

// import team from '../images/logo-awesome-profile-cards.svg';

import '../styles/App.scss';
import { useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import getDataApi from '../services/Api';
import Preview from './card/Preview';
import Design from './form/Design';

function App() {
  const [data, setData] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    palette: 1,
    photo: '',
  });

  const [dataAPI, setDataAPI] = useState({});

  const [classCollapsible, setClassCollapsible] = useState({
    design: '',
    stuffed: 'hidden',
    share: 'hidden',
  });

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputProp = ev.target.name;

    setData({ ...data, [inputProp]: inputValue });
  };

  const handleReset = (ev) => {
    ev.preventDefault();

    setData({
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: 1,
      photo: '',
    });
  };

  const handleCollapsible = (ev) => {
    const idClass = ev.target.id;
    // console.log(idClass);
    const overallCollapsables = {
      stuffed: 'hidden',
      share: 'hidden',
      design: 'hidden',
    };
    if (idClass === 'design') {
      if (classCollapsible.design === 'hidden') {
        const designCollapsable = {
          stuffed: 'hidden',
          share: 'hidden',
          design: '',
        };
        setClassCollapsible(designCollapsable);
      } else {
        setClassCollapsible(overallCollapsables);
      }
    }
    if (idClass === 'stuffed') {
      if (classCollapsible.stuffed === 'hidden') {
        const stuffedCollapsable = {
          stuffed: '',
          share: 'hidden',
          design: 'hidden',
        };
        setClassCollapsible(stuffedCollapsable);
      } else {
        setClassCollapsible(overallCollapsables);
      }
    }
    if (idClass === 'share') {
      if (classCollapsible.share === 'hidden') {
        const shareCollapsable = {
          stuffed: 'hidden',
          design: 'hidden',
          share: '',
        };
        setClassCollapsible(shareCollapsable);
      } else {
        setClassCollapsible(overallCollapsables);
      }
    }
  };

  // const [btnCreate, setBtnCreate] = useState('disable');

  const handleCreateBtn = (ev) => {
    ev.preventDefault();
    getDataApi(dataAPI).then((data) => {
      console.log(data);
      setDataAPI(data);
    });
  };
  return (
    <>
      {/* <main class="wrapper page">
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
      </main> */}
      <div className="createpage">
        <Header />
        <div className="createwrapper">
          <Preview reset={handleReset} data={data} />
          <form className="form" action="/signup" method="post">
            <Design
              data={data}
              handleInput={handleInput}
              collapsible={handleCollapsible}
            />

            <fieldset className={`filled ${classCollapsible.stuffed}`}>
              <div
                className="filled__legend"
                title="pincha aqui"
                onClick={handleCollapsible}
                id="stuffed"
              >
                <i className="fa-regular fa-keyboard icon"></i>
                <p className="filled__title-filled">rellena</p>
                <i className="fa-solid fa-angle-up collapsible "></i>
              </div>
              <section className="subsection filled-section">
                <label className="firstname filled-text" htmlFor="name">
                  Nombre completo
                </label>
                <input
                  className="box-text"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ej: Sally Jill"
                  required
                  value={data.name}
                  onChange={handleInput}
                />
                <label className="job filled-text" htmlFor="job">
                  Puesto
                </label>
                <input
                  className="box-text"
                  id="job"
                  type="text"
                  name="job"
                  placeholder="Ej: Front-end unicorn"
                  required
                  value={data.job}
                  onChange={handleInput}
                />
                <label className="image filled-text" htmlFor="image">
                  Imagen de perfil
                </label>

                <div className="filled-button">
                  <label htmlFor="image" className="input-orange box-text">
                    Añadir imagen
                  </label>
                  <input id="image" className="hidden-input" />

                  <span className="box-image"></span>
                </div>

                <label className="emailadress filled-text" htmlFor="email">
                  Email
                </label>
                <input
                  className="box-text"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ej: sally-hill@gmail.com"
                  required
                  value={data.email}
                  onChange={handleInput}
                />
                <label className="phone filled-text" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  className="box-text"
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Ej: 555-55-55-55"
                  required
                  value={data.phone}
                  onChange={handleInput}
                />
                <label className="linkedin filled-text" htmlFor="linkedin">
                  Linkedin
                </label>
                <input
                  className="box-text"
                  id="linkedin"
                  type="text"
                  name="linkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill "
                  required
                  value={data.linkedin}
                  onChange={handleInput}
                />
                <label className="github filled-text" htmlFor="github">
                  Github
                </label>
                <input
                  className="box-text"
                  id="github"
                  type="text"
                  name="github"
                  placeholder="Ej: @sally-hill"
                  required
                  value={data.github}
                  onChange={handleInput}
                />
              </section>
            </fieldset>

            <fieldset className={`wrapper-share ${classCollapsible.share}`}>
              <div className="share">
                <div
                  className="share__container"
                  title="pincha aquí"
                  onClick={handleCollapsible}
                  id="share"
                >
                  <i className="fa-solid fa-share-nodes share__container__icon"></i>
                  <p className="share__container__title">comparte</p>
                  <i className="fa-solid fa-angle-up share__container__angle collapsible "></i>
                </div>
                <div className="button-container subsection">
                  <button
                    className="button-container__create"
                    onClick={handleCreateBtn}
                  >
                    <i className="fa-solid fa-address-card button-container__create__icon"></i>
                    <p
                      className="button-container__create__title"
                      title="crear tarjeta"
                    >
                      Crear tarjeta
                    </p>
                  </button>
                </div>
              </div>

              <div>
                <div className="done subsection">
                  <p className="done__title">La tarjeta ha sido creada:</p>
                  <a
                    className="done__link"
                    title="Ir al enlace de la tarjeta"
                    href="1#"
                  >
                    https://link tarjeta creada
                  </a>
                  <button
                    className="done__button-twitter"
                    title="publicar la tarjeta en twitter"
                  >
                    Compartir en Twitter
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

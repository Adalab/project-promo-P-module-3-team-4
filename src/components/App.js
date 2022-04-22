import '../styles/App.scss';

import logo from '../images/logo-adalab.png';
import team from '../images/logo-team.png';
import { useState } from 'react';

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
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputProp = ev.target.name;

    console.log(inputValue);
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
  //const [btnCreate, setSBtnCreate] = useState('disable');

  /*const handleCreateBtn = (ev) => {
    ev.preventDefault();
    setSBtnCreate(' ');
  };*/
  return (
    <>
      <div className="createpage">
        <header className="header">
          <a className="header__link" href="../index.html" title="ir al inicio">
            {' '}
          </a>
        </header>

        <div className="createwrapper">
          <article className="preview">
            <button
              className="reset "
              type="reset"
              title="Reset"
              onClick={handleReset}
            >
              <i className="fa-solid fa-trash-can reset__can"></i>Reset
            </button>

            <div className={`card palette${data.palette}`}>
              <div className="card__rectangle rectangle "></div>

              <h2 className="card__names name ">
                {data.name || 'Nombre Apellido'}
              </h2>
              <h3 className="card__profession ">{data.job || 'Profesión'}</h3>

              <div className="card__container-img "></div>
              <nav className="card__icons icons">
                <div className="card__icons__container-mobile border ">
                  <a
                    title="llamar por teléfono"
                    href={data.phone}
                    target="blank"
                  >
                    <i className="fa-solid fa-mobile-screen-button class card__icons__container-mobile__mobile link"></i>
                  </a>
                </div>

                <div className="card__icons__container-mail border">
                  <a
                    title="enviar email"
                    href={`mailto:${data.email}`}
                    target="blank"
                  >
                    <i className="fa-solid fa-envelope card__icons__container-mail__mail link"></i>
                  </a>
                </div>
                <div className="card__icons__container-linkedin border">
                  <a
                    href={`https://www.linkedin.com/${data.linkedin}`}
                    target="blank"
                    title="ir a perfil de Linkedin"
                  >
                    <i className="fa-brands fa-linkedin-in card__icons__container-linkedin__linkedin link"></i>
                  </a>
                </div>
                <div className="card__icons__container-git border">
                  <a
                    href={`https://github.com/${data.github}`}
                    target="blank"
                    title="ir a perfil de Github"
                  >
                    <i className="fa-brands fa-github-alt card__icons__container-git__github link"></i>
                  </a>
                </div>
              </nav>
            </div>
          </article>

          <form className="form" action="/signup" method="post">
            <fieldset className="design">
              <div className="design__legend" title="pincha aqui">
                <i className="fa-regular fa-object-ungroup icon"></i>
                <p className="design__titledesign">Diseña</p>
                <i className="fa-solid fa-angle-up collapsible"></i>
              </div>

              <div>
                <label htmlFor="palette" className="palette">
                  Colores
                </label>
                <div className="colors">
                  <input
                    id="palette"
                    type="radio"
                    name="palette"
                    value="1"
                    // revisar esto
                    checked={data.palette === '1' ? true : '1'}
                    onChange={handleInput}
                  />
                  <div className="blue1 square"></div>
                  <div className="blue1__blue2 square"></div>
                  <div className="blue1__blue3 square"></div>
                </div>

                <div className="colors">
                  <input
                    id="palette"
                    type="radio"
                    name="palette"
                    value="2"
                    checked={data.palette === '2'}
                    onChange={handleInput}
                  />
                  <div className="square red1"></div>
                  <div className="square red1__red2"></div>
                  <div className="square red1__red3"></div>
                </div>

                <div className="colors">
                  <input
                    id="palette"
                    type="radio"
                    name="palette"
                    value="3"
                    checked={data.palette === '3'}
                    onChange={handleInput}
                  />
                  <div className="square mix1"></div>
                  <div className="square mix1__mix2"></div>
                  <div className="square mix1__mix3"></div>
                </div>

                <div className="colors">
                  <input
                    id="palette"
                    type="radio"
                    name="palette"
                    value="4"
                    checked={data.palette === '4'}
                    onChange={handleInput}
                  />
                  <div className="square mixteam1"></div>
                  <div className="square mixteam1__mixteam2"></div>
                  <div className="square mixteam1__mixteam3"></div>
                </div>
              </div>
            </fieldset>

            <fieldset className="filled">
              <div className="filled__legend" title="pincha aqui">
                <i className="fa-regular fa-keyboard icon"></i>
                <p className="filled__title-filled">rellena</p>
                <i className="fa-solid fa-angle-up collapsible"></i>
              </div>
              <section className="filled-section">
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

            <fieldset className="wrapper-share">
              <div className="share">
                <div className="share__container" title="pincha aquí">
                  <i className="fa-solid fa-share-nodes share__container__icon"></i>
                  <p className="share__container__title">comparte</p>
                  <i className="fa-solid fa-angle-up share__container__angle"></i>
                </div>
                <div className="button-container">
                  <button
                    className="button-container__create "
                    //onClick={handleCreateBtn}
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

              <div className="disapear">
                <div className="done">
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
                  ></button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <footer>
          <div className="footer">
            <img className="footer__img" src={team} alt="" />
            <h2 className="h2">Awesome profile-cards @2018 Equipo 6</h2>

            <a title="adalab" href="https://www.adalab.es/">
              <img className="adalab" src={logo} alt="logo adalab" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

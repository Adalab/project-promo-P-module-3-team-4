import '../styles/App.scss';

import logo from '../images/logo-adalab.png';
import team from '../images/logo-team.png';

function App() {
  return (
    <div className="App">
      <body className="createpage">
        <header className="header">
          <a className="header__link" href="../index.html" title="ir al inicio">
            {' '}
          </a>
        </header>

        <div className="createwrapper">
          <article className="preview">
            <button className="reset js-resetButton" type="reset" title="Reset">
              <i className="fa-solid fa-trash-can reset__can"></i>Reset
            </button>

            <div className="card js_cardContainer">
              <div className="card__rectangle js_cardRectangle"></div>

              <h2 className="card__names js_namesCard js_resetNamesCard">
                nombre apellido
              </h2>
              <h3 className="card__profession js_professionCard js_resetJobCard">
                profesión
              </h3>

              <div className="card__container-img js__profile-image"></div>
              <nav className="card__icons">
                <div className="card__icons__container-mobile js_containerMobile">
                  <a
                    className="js_iconMobile js_resetPhone"
                    title="llamar por teléfono"
                    href=""
                    target="_blank"
                  >
                    <i className="fa-solid fa-mobile-screen-button class card__icons__container-mobile__mobile"></i>
                  </a>
                </div>

                <div className="card__icons__container-mail js_containerMail">
                  <a
                    className="js_iconMail js_resetMail"
                    title="enviar email"
                    href="mailto:hola@adalab.es"
                    target="_blank"
                  >
                    <i className="fa-solid fa-envelope card__icons__container-mail__mail"></i>
                  </a>
                </div>
                <div className="card__icons__container-linkedin js_containerLinkedIn">
                  <a
                    className="js_iconLinkedIn js_resetLinkedin"
                    href="https://www.linkedin.com/school/adalab/?originalSubdomain=es"
                    target="_blank"
                    title="ir a perfil de Linkedin"
                  >
                    <i className="fa-brands fa-linkedin-in card__icons__container-linkedin__linkedin"></i>
                  </a>
                </div>
                <div className="card__icons__container-git js_containerGit">
                  <a
                    className="js_iconGit js_resetGithub"
                    href="https://github.com/Adalab/"
                    target="_blank"
                    title="ir a perfil de Github"
                  >
                    <i className="fa-brands fa-github-alt card__icons__container-git__github"></i>
                  </a>
                </div>
              </nav>
            </div>
          </article>

          <form className="form js-form" action="/signup" method="post">
            <fieldset className="design">
              <div
                className="design__legend js-design_legend"
                title="pincha aqui"
              >
                <i className="fa-regular fa-object-ungroup icon"></i>
                <p className="design__titledesign">Diseña</p>
                <i className="fa-solid fa-angle-up collapsible js-design__triangle"></i>
              </div>

              <div className="hidden js-design__wrapper">
                <label for="palette" className="palette">
                  Colores
                </label>
                <div className="colors js_colorBlue">
                  <input
                    className="js_button_paletteBlue js_radio1"
                    id="palette"
                    type="radio"
                    name="palette"
                    checked="selected"
                  />
                  <div className="blue1"></div>
                  <div className="blue1__blue2"></div>
                  <div className="blue1__blue3"></div>
                </div>

                <div className="colors js_colorRed">
                  <input
                    className="js_button_paletteRed"
                    id="palette"
                    type="radio"
                    name="palette"
                  />
                  <div className="red1"></div>
                  <div className="red1__red2"></div>
                  <div className="red1__red3"></div>
                </div>

                <div className="colors js_colorsMix">
                  <input
                    className="js_button_paletteMix"
                    id="palette"
                    type="radio"
                    name="palette"
                  />
                  <div className="mix1"></div>
                  <div className="mix1__mix2"></div>
                  <div className="mix1__mix3"></div>
                </div>

                <div className="colors js_colorsMixTeam">
                  <input
                    className="js_button_paletteMixteam"
                    id="palette"
                    type="radio"
                    name="palette"
                  />
                  <div className="mixteam1"></div>
                  <div className="mixteam1__mixteam2"></div>
                  <div className="mixteam1__mixteam3"></div>
                </div>
              </div>
            </fieldset>

            <fieldset className="filled">
              <div
                className="filled__legend js-fill_legend"
                title="pincha aqui"
              >
                <i className="fa-regular fa-keyboard icon"></i>
                <p className="filled__title-filled">rellena</p>
                <i className="fa-solid fa-angle-up collapsible js-fill__triangle"></i>
              </div>
              <section className="filled-section hidden js-fill__wrapper">
                <label className="firstname filled-text" for="name">
                  Nombre completo
                </label>
                <input
                  className="box-text js-inputNames js_resetName"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ej: Sally Jill"
                  required
                />
                <label className="job filled-text" for="job">
                  Puesto
                </label>
                <input
                  className="box-text js-inputProfession js_resetJob"
                  id="job"
                  type="text"
                  name="job"
                  placeholder="Ej: Front-end unicorn"
                  required
                />
                <label className="image filled-text" for="image">
                  Imagen de perfil
                </label>

                <div className="filled-button">
                  <label
                    for="image"
                    className="input-orange box-text js__profile-trigger"
                  >
                    Añadir imagen
                  </label>
                  <input
                    type="file"
                    name
                    id="image"
                    className="hidden-input js__profile-upload-btn"
                  />

                  <span className="box-image js__profile-preview"></span>
                </div>

                <label className="emailadress filled-text" for="email">
                  Email
                </label>
                <input
                  className="box-text js_resetEmail"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ej: sally-hill@gmail.com"
                  required
                />
                <label className="phone filled-text" for="phone">
                  Teléfono
                </label>
                <input
                  className="box-text js_resetPhone"
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Ej: 555-55-55-55"
                  required
                />
                <label className="linkedin filled-text" for="linkedin">
                  Linkedin
                </label>
                <input
                  className="box-text js_resetLinkedin"
                  id="linkedin"
                  type="text"
                  name="linkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill "
                  required
                />
                <label className="github filled-text" for="github">
                  Github
                </label>
                <input
                  className="box-tex js_resetGithub"
                  id="github"
                  type="text"
                  name="name"
                  placeholder="Ej: @sally-hill"
                  required
                />
              </section>
            </fieldset>

            <fieldset className="wrapper-share">
              <div className="share">
                <div
                  className="share__container js-share_legend"
                  title="pincha aquí"
                >
                  <i className="fa-solid fa-share-nodes share__container__icon"></i>
                  <p className="share__container__title">comparte</p>
                  <i className="fa-solid fa-angle-up share__container__angle js-share__triangle"></i>
                </div>
                <div className="button-container hidden js-share__wrapper">
                  <button className="button-container__create js-buttonShare">
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

              <div className="disapear js-shareLinkWrapper">
                <div className="done">
                  <p className="done__title">La tarjeta ha sido creada:</p>
                  <a
                    className="done__link js-shareLink"
                    title="Ir al enlace de la tarjeta"
                    href=""
                  >
                    https://link tarjeta creada
                  </a>
                  <button
                    className="done__button-twitter js-shareTwitter"
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
      </body>
    </div>
  );
}

export default App;

import '../../styles/App.scss';
import Avatar from '../../images/cat.jpg';
const Preview = (props) => {
  const handleReset = (ev) => {
    ev.preventDefault();

    const cleanedData = {
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      palette: '1',
      photo: Avatar,
    };

    props.reset(cleanedData);
    console.log(cleanedData);
  };

  return (
    <article className="preview">
      <button
        className="reset "
        type="reset"
        title="Reset"
        onClick={handleReset}
      >
        <i className="fa-solid fa-trash-can reset__can"></i>Reset
      </button>

      <div className={`card palette${props.data.palette}`}>
        <div className="card__rectangle rectangle "></div>

        <h2 className="card__names name ">
          {props.data.name || 'Nombre Apellido'}
        </h2>
        <h3 className="card__profession ">{props.data.job || 'Profesión'}</h3>

        <div
          className="card__container-img "
          style={{ backgroundImage: `url(${props.data.photo})` }}
        ></div>
        <nav className="card__icons icons">
          <div className="card__icons__container-mobile border ">
            <a
              title="llamar por teléfono"
              href={props.data.phone}
              target="blank"
            >
              <i className="fa-solid fa-mobile-screen-button class card__icons__container-mobile__mobile link"></i>
            </a>
          </div>

          <div className="card__icons__container-mail border">
            <a
              title="enviar email"
              href={`mailto:${props.data.email}`}
              target="blank"
            >
              <i className="fa-solid fa-envelope card__icons__container-mail__mail link"></i>
            </a>
          </div>
          <div className="card__icons__container-linkedin border">
            <a
              href={`https://www.linkedin.com/${props.data.linkedin}`}
              target="blank"
              title="ir a perfil de Linkedin"
            >
              <i className="fa-brands fa-linkedin-in card__icons__container-linkedin__linkedin link"></i>
            </a>
          </div>
          <div className="card__icons__container-git border">
            <a
              href={`https://github.com/${props.data.github}`}
              target="blank"
              title="ir a perfil de Github"
            >
              <i className="fa-brands fa-github-alt card__icons__container-git__github link"></i>
            </a>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default Preview;

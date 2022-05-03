import ImageReader from '../../services/ImageReader';
import { useRef } from 'react';
const Stuffed = (props) => {
  // Creamos una referencia a una etiqueta HTML y la llamamos inputEl
  const inputEl = useRef();
  console.log(inputEl);
  const handleButton = () => {
    // current apunta a la etiqueta input
    inputEl.current.focus();
    console.log('cick');
  };

  const handleStuffed = (ev) => {
    const value = ev.target.value;
    const name = ev.target.name;
    props.handleInput(value, name);
  };
  const handleHiddenSections = (ev) => {
    const id = ev.target.id;
    props.handleCollapsible(id);
  };
  return (
    <fieldset className={`filled ${props.classCollapsible.stuffed}`}>
      <div
        className="filled__legend"
        title="pincha aqui"
        onClick={handleHiddenSections}
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
          value={props.data.name}
          onChange={handleStuffed}
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
          value={props.data.job}
          onChange={handleStuffed}
        />
        <label className="image filled-text" htmlFor="image">
          Imagen de perfil
        </label>

        <div className="filled-button">
          <label htmlFor="image" className="input-orange box-text">
            Añadir imagen
          </label>
          <input id="image" className="hidden-input" onClick={handleButton} />

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
          value={props.data.email}
          onChange={handleStuffed}
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
          value={props.data.phone}
          onChange={handleStuffed}
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
          value={props.data.linkedin}
          onChange={handleStuffed}
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
          value={props.data.github}
          onChange={handleStuffed}
        />
      </section>
    </fieldset>
  );
};

export default Stuffed;

const Design = (props) => {
  
  const handleDesign = () => {
    props.handleInput();
  };

  const handleHiddenSections = () => {
    props.handleCollapsible();
  };

  return (

    <fieldset className={`design ${props.classCollapsible.design}`}>
      <div
        className="design__legend"
        title="pincha aqui"
        onClick={handleHiddenSections}
        id="design"
      >
        <i className="fa-regular fa-object-ungroup icon"></i>
        <p className="design__titledesign">Diseña</p>
        <i className="fa-solid fa-angle-up collapsible"></i>
      </div>

      <div className="subsection">
        <label htmlFor="palette" className="palette">
          Colores
        </label>
        <div className="colors">
          <input
            id="palette"
            type="radio"
            name="palette"
            value="1"
            checked={props.data.palette === '1'}
            onChange={handleDesign}
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
            checked={props.data.palette === '2'}
            onChange={handleDesign}
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
            checked={props.data.palette === '3'}
            onChange={handleDesign}
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
            checked={props.data.palette === '4'}
            onChange={handleDesign}
          />
          <div className="square mixteam1"></div>
          <div className="square mixteam1__mixteam2"></div>
          <div className="square mixteam1__mixteam3"></div>
        </div>
      </div>
          </fieldset>
    
  );
};

export default Design;

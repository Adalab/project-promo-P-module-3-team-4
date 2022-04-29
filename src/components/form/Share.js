const Share = (props) => {
  const handleShare = () => {
    props.handleCreateBtn();
  };

  const handleHiddenSections = (ev) => {
    const id = ev.target.id;

    props.handleCollapsible(id);
  };
  return (
    <fieldset className={`wrapper-share ${props.classCollapsible.share}`}>
      <div className="share">
        <div
          className="share__container"
          title="pincha aquí"
          onClick={handleHiddenSections}
          id="share"
        >
          <i className="fa-solid fa-share-nodes share__container__icon"></i>
          <p className="share__container__title">comparte</p>
          <i className="fa-solid fa-angle-up share__container__angle collapsible "></i>
        </div>
        <div className="button-container subsection">
          <button
            className={`button-container__create ${props.disable}`}
            onClick={handleShare}
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
  );
};

export default Share;

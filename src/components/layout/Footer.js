import '../../styles/App.scss';
import logo from '../../images/logo-adalab.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img className="footer__img" src={logo} alt="" />
        <h2 className="h2">Awesome profile-cards @2018 Equipo 6</h2>

        <a title="adalab" href="https://www.adalab.es/">
          <img className="adalab" src={logo} alt="logo adalab" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

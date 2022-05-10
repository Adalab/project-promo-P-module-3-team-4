import { Link } from 'react-router-dom';
import '../../styles/App.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <Link className="header__link" to="/" title="ir al inicio"></Link>
      </header>
    </>
  );
};

export default Header;

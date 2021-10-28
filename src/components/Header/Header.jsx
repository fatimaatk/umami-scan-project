import Menu from './Menu/Menu';
import Logo from '../../assets/logo_umami.svg';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="logo" src={Logo} alt="logo Umami" />
      </div>
      <div className="hamburger">
        <span className="hamburger-span">&nbsp;</span>
        <span className="hamburger-span">&nbsp;</span>
        <span className="hamburger-span">&nbsp;</span>
        <span className="hamburger-span">&nbsp;</span>
      </div>
      <>
        <Menu />
      </>
    </header>
  );
};

export default Header;

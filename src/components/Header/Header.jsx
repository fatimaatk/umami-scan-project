import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo_umami.svg';
import './header.css';

const Header = () => {
  const [hamburgerOpened, setHamburgerOpened] = useState(false);
  const HandleHamburger = (e) => {
    e.preventDefault();
    setHamburgerOpened(!hamburgerOpened);
  };
  return (
    <header className={`header ${hamburgerOpened ? 'hamburger-opened' : ''}`}>
      <div className="header-container">
        <Link to="/">
          <img
            className="logo"
            src={Logo}
            alt="logo Umami"
            width="150"
            height="41"
          />
        </Link>
        <div
          onClick={HandleHamburger}
          onKeyPress={HandleHamburger}
          className="hamburger"
          role="button"
          tabIndex={0}
        >
          <span className="hamburger-span">&nbsp;</span>
          <span className="hamburger-span">&nbsp;</span>
          <span className="hamburger-span">&nbsp;</span>
          <span className="hamburger-span">&nbsp;</span>
        </div>

        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/my-umami">My Umami</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

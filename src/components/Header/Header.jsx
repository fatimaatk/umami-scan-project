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
          <ul>
            <li>
              <Link to="/">Home</Link>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              <Link to="/my-umami">My Umami</Link>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="fp-footer">
      <NavLink to="/" className="fp-footer__logo">
        Fine<span>Point</span> Designs
      </NavLink>

      <ul className="fp-footer__links">
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li><NavHashLink smooth to="/faq#contact">Contact</NavHashLink></li>
      </ul>

      <span className="fp-footer__copy">
        &copy; {new Date().getFullYear()} FinePoint Designs. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
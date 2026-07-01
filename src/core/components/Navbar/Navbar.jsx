import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const close = () => setMenuOpen(false);

  return (
    <header>
      <nav className="fp-navbar">
        <NavLink to="/" className="fp-navbar__logo" onClick={close}>
          Fine<span>Point</span> Designs
        </NavLink>

        {/* Desktop links */}
        <ul className="fp-navbar__links">
          <li><NavHashLink smooth to="/#home">Home</NavHashLink></li>
          <li><NavHashLink smooth to="/#portfolio">Portfolio</NavHashLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavHashLink smooth to="/faq#contact">Contact</NavHashLink></li>
        </ul>

        <NavHashLink smooth to="/faq#contact" className="fp-navbar__cta-wrap">
          <button className="fp-navbar__cta">Get a quote</button>
        </NavHashLink>

        {/* Hamburger */}
        <button
          className={`fp-navbar__burger${menuOpen ? ' fp-navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`fp-mobile-menu${menuOpen ? ' fp-mobile-menu--open' : ''}`}>
        <NavHashLink smooth to="/#home"      onClick={close}>Home</NavHashLink>
        <NavHashLink smooth to="/#portfolio" onClick={close}>Portfolio</NavHashLink>
        <NavLink               to="/faq"     onClick={close}>FAQ</NavLink>
        <NavHashLink smooth to="/faq#contact" onClick={close}>Contact</NavHashLink>
        <NavHashLink smooth to="/faq#contact" onClick={close}>
          <button className="fp-btn-primary fp-mobile-menu__cta">Get a quote</button>
        </NavHashLink>
      </div>
    </header>
  );
};

export default Navbar;
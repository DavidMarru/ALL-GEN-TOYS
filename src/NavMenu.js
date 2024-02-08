import React, { useState, useEffect } from 'react';
import './NavMenu.css';
import { HashLink as NavLink } from 'react-router-hash-link';

const NavMenu = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isNavClosed, setIsNavClosed] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    if (isNavVisible) {
      setIsNavClosed(false);
      setIsNavOpen(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIsNavClosed(true);
      }, 1700);

      setIsNavOpen(false);
      return () => clearTimeout(timeoutId);
    }
  }, [isNavVisible]);

  return (
    <div>
        <div className={`nav-content ${isNavVisible ? 'showNav' : 'hideNav'} ${isNavClosed ? 'hidden' : ''}`}>
            <div className="Menu-links">
                <NavLink onClick={toggleNav} to='#home'> Home</NavLink>
                <NavLink onClick={toggleNav} to='#WhatsNew'> What's Hot</NavLink>
                <NavLink onClick={toggleNav} to='#KidsProducts'>Kid toys</NavLink>
                <NavLink onClick={toggleNav} to='#UniversalToys'>Universal Toys</NavLink>
                <NavLink onClick={toggleNav} to='#SmartElectric'>Smart Electric</NavLink>
            </div>
        </div>

      <div className="mobileNav-Bar" id="mobileNavBar">
        <button className={`nav-icon ${isNavVisible ? 'open' : 'NavClosed'} ${isNavClosed ? '' : 'MenuClosed'}`} onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>    

        </button>
      </div>
    </div>
  );
};

export default NavMenu;

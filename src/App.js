import React from 'react';
import Home from './Home';
import WhatsNew from './WhatsNew';
import KidsProducts from './KidsProducts';
import UniversalToys from './UniversalToys';
import SmartElectric from './SmartElectric';
import { CartProvider } from './CartContext';
import Cart from './Cart';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import NavMenu from './NavMenu';
import ShowCase1 from './showCase1';
import Footer from './Footer';




function App() {
  
  return (
    <BrowserRouter>
    <body>
      <CartProvider>
        <div className="content">
        <Home />
        <NavMenu />
        <nav className="navbar">
          <div className="links">
          <a href="#home">Home</a>
            <NavLink to='#WhatsNew'> What's Hot</NavLink>
            <NavLink to='#KidsProducts'>Kid toys</NavLink>
            <NavLink to='#UniversalToys'>Universal Toys</NavLink>
            <NavLink to='#SmartElectric'>Smart Electric</NavLink>
          </div>
        </nav>
        <Cart />
                  <div className="wrapper">
                    <WhatsNew />
                    </div>
                  <div className="backGroundM">
                    <div className="wrapper">
                      <ShowCase1 />
                    </div>
                  </div>
                  <div className="backGroundC">
                  <div className="wrapper">
                    <KidsProducts  />
                    <UniversalToys  />
                   </div>
                  </div>
                    <div className="backGroundj">
                    <div className="wrapper">
                    <SmartElectric />
                  </div>
                    <Footer />
              </div>
            </div>
      </CartProvider>
      </body>
    </BrowserRouter>
  );
}

export default App;




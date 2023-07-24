import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* header */}
      <div
        className={`top-header-area ${isMenuOpen ? 'menu-open' : ''}`}
        id="sticker"
        style={{ background: '#051922' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="main-menu-wrap">
                {/* logo */}
                <div className="site-logo">
                  <div className="main-menu">
                    <h2 className="current-list-item orange-text" style={{ fontWeight: 'bold' }}>
                      Herbaland
                    </h2>
                  </div>
                </div>
                {/* logo */}
                {/* menu start */}
                <nav className={`main-menu ${isMenuOpen ? 'open' : ''}`}>
                  <ul>
                    <li className="current-list-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/market">Marketplace</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contacto</Link>
                    </li>
                    <li>
                      <div className="header-icons">
                        <Link to="/cart" className="shopping-cart">
                          <i className="fas fa-shopping-cart" />
                        </Link>
                        <a className="mobile-hide search-bar-icon" href="#">
                          <i className="fas fa-search" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                <a className="mobile-show search-bar-icon" href="#">
                  <i className="fas fa-search" />
                </a>
                <div className="mobile-menu">
                  <div
                    className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
                    onClick={handleMenuToggle}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                {/* menu end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end header */}
      {/* search area */}
      <div className="search-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="close-btn">
                <i className="fas fa-window-close" />
              </span>
              <div className="search-bar">
                <div className="search-bar-tablecell">
                  <h3>Search For:</h3>
                  <input type="text" placeholder="Keywords" />
                  <button type="submit">
                    Search <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end search area */}
    </div>
  );
};

export default Navbar;

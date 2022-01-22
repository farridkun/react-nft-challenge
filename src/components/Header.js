import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';

const Header = () => {
  return (
      <div className="header">
          <div className="logoContainer">
              <img src={punkLogo} className="punkLogo" alt="logo" />
          </div>

          <div className="searchBar">
              <div className="searchIconContainer">
                  <img src={searchIcon} alt="searchIcon" />
              </div>
              <input className="searchInput" placeholder="Coba cari sekarang koleksi, jenis atau nama pengguna ..." />
          </div>

          <div className="headerItems">
              <p>Giveaway</p>
              <p>Explore</p>
              <p>Buat</p>
          </div>

          <div className="headerActions">
              <div className="themeSwitchContainer">
                  <img src={themeSwitchIcon} alt="SwitchIcon" />
              </div>
          </div>

          <div className="loginButton">
              COBA SEKARANG
          </div>
      </div>
  );
};

export default Header;

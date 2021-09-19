import React from 'react';
import { HiSun } from 'react-icons/hi';

function HeaderComponent() {
  return (
    <header className="header">
        <h1 className="header__title"><a href="https://www.github.com/salv-dev/dev-finder" rel="noreferrer" target="_blank" >devfinder</a></h1>
        <button className="header__themeButton">
            <p>CLARO</p>
            <HiSun color="#fff" size={22} />
        </button>
    </header>
    );
}

export default HeaderComponent;
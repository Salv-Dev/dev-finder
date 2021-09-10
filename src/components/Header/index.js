import React from 'react';
import { IoSunny } from 'react-icons/io5';

function HeaderComponent() {
  return (
    <header>
        <h1><a href="#">devfinder</a></h1>
        <button>
            <p>Claro</p>
            <IoSunny color="#fff" />
        </button>
    </header>
    );
}

export default HeaderComponent;
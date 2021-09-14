import React from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchComponent() {
  return (
      <div className="search">
          <div className="search__icon">
            <FiSearch size={26} color="#0279fb" style={{ background: 'transparent' }}/>
          </div>
          <div className="search__form">
            <input className="search__form__input" type="text" placeholder="Username..." />
            <button className="search__form__button">
                <p className="search__form__button__text">Pesquisar</p>
            </button>
          </div>
      </div>
  );
}

export default SearchComponent;
import React from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchComponent() {
  return (
      <div>
          <FiSearch />
          <input type="text" placeholder="Procure por username..." />
          <button>
              <p>Pesquisar</p>
          </button>
      </div>
  );
}

export default SearchComponent;
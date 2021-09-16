import React, { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchComponent({ setUsername, loading, setLoading }) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const setUsernameWithEnter = (e) => {
    if(e.keyCode === 13) {
      setUsernameValue();
    }
  }

  const setUsernameValue = () => {
    if(inputValue) {
      setUsername(inputValue);
      setLoading(true);
      inputRef.current.value = "";
      inputRef.current.focus();
      setInputValue("");
    }
  }

  return (
      <div className="search">
          <div className="search__icon">
            <FiSearch size={26} color="#0279fb" style={{ background: 'transparent' }}/>
          </div>
          <div className="search__form">
            <input ref={inputRef} className="search__form__input" type="text" placeholder="Username..." onKeyUp={setUsernameWithEnter} onChange={e => setInputValue(e.target.value)} />
            <button className="search__form__button" onClick={setUsernameValue}>
            {loading ? 
              <div className="search__form__button__text--animated"><div className="search__form__button__text--animated__loading"></div></div>
              :
              <p className="search__form__button__text">Pesquisar</p>
            }
            </button>
          </div>
      </div>
  );
}

export default SearchComponent;
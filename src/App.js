import './App.css';
import React from 'react';

import LanguageProvider from './language/language.provider';
import Select from "./components/Select";
import Product from "./components/Product";

import localBd from './translations/bn.json';
import localEn from './translations/en.json';
import localDe from './translations/de.json';

const messages = {
  "bn": localBd,
  "en": localEn,
  "de": localDe
}

const App = () => {
  return (
    <LanguageProvider messages={messages}>
      <>
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">React Intl</h1>
            <ul className="nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><Select /></li>
            </ul>
          </div>
        </nav>
        <Product />
      </>
    </LanguageProvider>
  );
}

export default App;

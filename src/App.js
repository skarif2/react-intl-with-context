import './App.css';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import LanguageProvider from './language/language.provider';

import localBd from './translations/bn.json';
import localEn from './translations/en.json';
import localDe from './translations/de.json';

const messages = {
  "bn": localBd,
  "en": localEn,
  "de": localDe
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LanguageProvider messages={messages}>
          <h1>
            <FormattedMessage
              id='title'
              defaultMessage='My Title'
            />
          </h1>
          <h4>
            <FormattedMessage
              id='description'
              defaultMessage='My Description'
            />
          </h4>
          <p>
            <FormattedMessage
              id='simple'
              defaultMessage='My Paragraph'
            />
          </p>
        </LanguageProvider>
      </header>
    </div>
  );
}

export default App;

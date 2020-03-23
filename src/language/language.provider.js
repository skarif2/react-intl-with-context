import React, { useReducer, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import LanguageContext from './language.context';

const initialState = {
  lang: 'bn',
};

function languageReducer(state, action) {
  switch (action.type) {
    case 'CURRENT_LANGUAGE':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}

const LanguageProvider = ({ children, messages }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState);
  const toggleLanguage = lang => {
    dispatch({ type: 'CURRENT_LANGUAGE', payload: lang });
    localStorage.setItem('lang', lang);
  };
  useEffect(() => {
    const localLang = localStorage.getItem('lang');
    if (localLang) {
      toggleLanguage(localLang);
    } else {
      toggleLanguage(navigator.language.split('-')[0]);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ state, toggleLanguage, dispatch }}>
      <IntlProvider locale={state.lang} messages={messages[initialState.lang]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
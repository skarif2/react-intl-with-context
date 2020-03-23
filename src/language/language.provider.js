import React, { useReducer, useEffect } from 'react';
import LanguageContext from './language.context';
import languageReducer, { initialState } from './language.reducer';
import { IntlProvider } from 'react-intl';

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
      <IntlProvider locale={state.lang} messages={messages[state.lang]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;

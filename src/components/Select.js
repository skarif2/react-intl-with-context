import React, { useContext } from "react";

import LanguageContext from '../language/language.context';

const Select = () => {
  const {
    state,
    toggleLanguage,
  } = useContext(LanguageContext);
  return (
    <div className="wrapper">
      <div id="select-wrapper">
        <select value={state.lang} onChange={(e) => toggleLanguage(e.target.value)}>
          <option value="bn">Bengla</option>
          <option value="en">English</option>
          <option value="de">German</option>
        </select>
      </div>
    </div>
  )
}

export default Select;

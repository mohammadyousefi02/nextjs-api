import React from "react";
import { useLangugae } from "@/context/languageContext";

function testLanguage() {
  const { language, changeLanguage } = useLangugae()!;
  return (
    <div>
      <h1>{language.home}</h1>
      <h1>{language.aboutUs}</h1>
      <button onClick={() => changeLanguage("fa")}>change to fa</button>
      <button onClick={() => changeLanguage("en")}>change to en</button>
    </div>
  );
}

export default testLanguage;

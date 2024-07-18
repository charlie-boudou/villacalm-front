import { useTranslation } from 'react-i18next';
import { France, Uk } from '../assets/images/svgComponents';
import React from 'react';

function LanguageSwitch(): JSX.Element {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className="w-fit h-fit flex items-center space-x-[.5rem] border border-[.15rem] py-[.3rem] px-[.5rem] rounded-[.5rem]"
    >
        <France onClick={() => changeLanguage('fr')} className="w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem] cursor-pointer" />
        <Uk onClick={() => changeLanguage('en')} className="w-[1rem] h-[1rem] md:w-[2rem] md:h-[2rem] cursor-pointer" />
    </div>
  );
}

export { LanguageSwitch };
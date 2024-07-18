import React from "react";
import { Arrow } from "../assets/images/svgComponents";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

interface IButtonProps {
    contact: boolean;
}

function Button({contact}: IButtonProps): JSX.Element {
    const { t } = useTranslation();

    const handleScrollToAbout = () => {
        const aboutElement = document.getElementById('about');
        if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const value: JSX.Element = <>
        <p className="text-[1.5rem]">{contact ? t('contactUs') : t('learn')}</p>
        <Arrow fill="white" className="w-[1.5rem] h-[1.5rem]"/>
    </> ;

  return (
    <div 
        className="w-fit flex items-center space-x-[.5rem] rounded-[.5rem] cursor-pointer px-[1rem] py-[.5rem] bg-gold text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        onClick={() => handleScrollToAbout()}
    >
        {contact ? (
            <Link to="/contact" className="flex items-center space-x-[.5rem]">
                {value}
            </Link>
        ) : (
            value
        )}
    </div>
  );
}

export { Button };
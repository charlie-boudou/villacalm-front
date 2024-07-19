import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitch } from "../LanguageSwitch";
import { NavBarLinks } from "./NavBarLinks";

interface INavBarProps {
  isLoading: boolean;
}

function NavBar({ isLoading }: INavBarProps): JSX.Element {
  const location = useLocation();
  const [isHome, setIsHome] = useState<boolean>(location.pathname === '/');

  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname, isHome]);

  return (
    <div className={`w-full flex justify-between space-x-[1rem] ${isHome ? 'absolute' : 'bg-gold'} p-[1rem]`}>
      {!isLoading && (
        <>
          <Link to="/">
            <img src="logo-white-villa-calm.png" alt="logo" className="md:w-[8rem] md:h-[8rem] h-[4rem] w-[4rem]" />
          </Link>
          <div className="flex flex-col md:flex-row items-center space-y-[1rem] md:space-y-0 md:space-x-[3rem]">
            <NavBarLinks link="/construction" value="CONSTRUCTION" isHome={isHome} />
            <NavBarLinks link="/contact" value="CONTACT" isHome={isHome} />
          </div>
          <LanguageSwitch />
        </>
      )}
    </div>
  );
}

export { NavBar };

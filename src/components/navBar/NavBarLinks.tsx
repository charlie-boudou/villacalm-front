import React from "react";
import { Link, useLocation } from 'react-router-dom';

interface INavBarLinksProps {
    link: string;
    value: string;
    isHome: boolean;
}

function NavBarLinks({link, value, isHome}: INavBarLinksProps): JSX.Element {
  const location = useLocation();
  return (
    <Link 
        to={link}
        className={`h-fit w-fit ${isHome ? 'border-gold' : 'border-white'} ${location.pathname.replace('/', '') === value.toLowerCase() ? 'bg-white text-gold': 'text-white'} font-bold md:text-[1.5rem] px-[1rem] rounded-[.5rem] border-[.15rem] darlene  md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-300`}
    >
        {value}
    </Link>
  )
}

export { NavBarLinks };
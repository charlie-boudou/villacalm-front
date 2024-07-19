import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface INavBarLinksProps {
    link: string;
    value: string;
    isHome: boolean;
}

function NavBarLinks({ link, value, isHome }: INavBarLinksProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/' && window.localStorage.getItem('scrollToAbout') === 'true') {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, window.localStorage.scrollToAbout]);

  const handleClickAbout = () => {
    if (location.pathname !== '/') {
      window.localStorage.setItem('scrollToAbout', 'true');
      navigate('/');
    } else {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {value === 'ABOUT' ? (
        <div 
          onClick={handleClickAbout}
          className={`h-fit w-fit cursor-pointer ${isHome ? 'border-gold' : 'border-white'} ${location.pathname.replace('/', '') === value.toLowerCase() ? 'bg-white text-gold' : 'text-white'} font-bold md:text-[1.5rem] px-[1rem] rounded-[.5rem] border-[.15rem] darlene md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-300`}
        >
          {value}
        </div>
      ) : (
        <Link 
          to={link}
          className={`h-fit w-fit ${isHome ? 'border-gold' : 'border-white'} ${location.pathname.replace('/', '') === value.toLowerCase() ? 'bg-white text-gold' : 'text-white'} font-bold md:text-[1.5rem] px-[1rem] rounded-[.5rem] border-[.15rem] darlene md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-300`}
        >
          {value}
        </Link>
      )}
    </>
  );
}

export { NavBarLinks };

import React, { useEffect, useState } from "react";
import { NavBar} from '../components/navBar/NavBar';
import { useDispatch } from "react-redux";
import { fetchMockUps } from "../utils/apiRequests";

interface ILayoutProps {
  children: JSX.Element;
}

function Layout({ children }: ILayoutProps): JSX.Element {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    fetchMockUps(dispatch, setIsLoading);
  }, []);

  return (
    <div className="w-full h-full relative">
      <NavBar isLoading={isLoading} />
      <div>{children}</div>
    </div>
  );
}

export { Layout };
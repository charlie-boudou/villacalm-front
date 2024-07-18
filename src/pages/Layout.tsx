import React, { useEffect } from "react";
import { NavBar} from '../components/navBar/NavBar';
import { useDispatch } from "react-redux";
import { fetchMockUps } from "../utils/apiRequests";

interface ILayoutProps {
  children: JSX.Element;
}

function Layout({ children }: ILayoutProps): JSX.Element {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchMockUps(dispatch);
  }, []);

  return (
    <div className="w-full h-full relative">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}

export { Layout };
import React, { useEffect, useState } from "react";
import { HomeCard } from "../components/home/HomeCard";
import { About } from '../components/home/About';
import { IPhotosList } from "../utils/types";
import { useSelector } from "react-redux";
import Loader from "../components/loaders/Loader";

function Home(): JSX.Element {
  const images = useSelector((state: any) => state.images);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [homeCardMockups, setHomeCardMockUps] = useState<IPhotosList[]>([]);
  const [allMockUps, setAllMockUps] = useState<IPhotosList[]>([]);

  useEffect(() => {
    if (images.mockUps.length > 0) {
      setAllMockUps(images.mockUps.slice(0, images.mockUps.length - 2));
      setHomeCardMockUps(images.mockUps.slice(0, 5));
      setIsLoading(false);
    }
  }, [images.mockUps]);

  return (
    <div className="w-full h-full">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <HomeCard mockUps={homeCardMockups} />
          <About mockUps={allMockUps} />
        </>
      )}
    </div>
  );
}

export { Home };

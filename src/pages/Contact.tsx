import React from "react";
import { useSelector } from "react-redux";

function Contact(): JSX.Element {
  const images = useSelector((state: any) => state.images);

  return (
    <div className="p-[1rem] flex flex-col w-full h-screen">
      <img src={images.mockUps[images.mockUps.length - 1].src} alt={images.mockUps[images.mockUps.length - 1].title} />
    </div>
  );
}

export { Contact };
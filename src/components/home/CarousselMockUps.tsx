import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import { ChevronLeft, ChevronRight } from "../../assets/images/svgComponents";
import { IPhotosList } from "../../utils/types";

interface ICarousselMockUpsProps {
  mockUps: IPhotosList[];
  setViewerIsOpen: Dispatch<SetStateAction<boolean>>;
  setCurrentImage: Dispatch<SetStateAction<number>>;
}

function CarousselMockUps({ mockUps, setViewerIsOpen, setCurrentImage }: ICarousselMockUpsProps): JSX.Element {
  const [index, setIndex] = useState<number>(6);
  const [startIndex, setStartIndex] = useState<number>(0);

  const handleClickPicture = (i: number) => {
    setIndex(i);
  };

  useEffect(() => {
    if (index < startIndex) {
      setStartIndex(index);
    } else if (index >= startIndex + 4) {
      setStartIndex(index - 3);
    }
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="rounded-[.5rem] mb-[2rem]">
        <img
          src={mockUps.length > 0 ? mockUps[index].src : ""}
          className="rounded-[.5rem] cursor-pointer"
          alt="project image"
          onClick={() => {
            setViewerIsOpen(true);
            setCurrentImage(index);
          }}
        />
      </div>
      <div className="w-full flex items-center space-x-[.5rem] justify-center">
        <ChevronLeft
          className="cursor-pointer w-[3rem] h-[3rem] fill-gold"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
        />
        <div className="flex items-center space-x-[.5rem] flex-wrap justify-center">
          {mockUps.length > 0 &&
            mockUps.slice(startIndex, startIndex + 4).map((mockUp: IPhotosList, i: number) => (
              <img
                key={startIndex + i}
                onClick={() => handleClickPicture(startIndex + i)}
                src={mockUp.src}
                alt="project"
                className={`${i + startIndex !== index ? 'opacity-60' : ''} object-fill rounded-[1rem] w-[3rem] h-[3rem] md:w-[10rem] md:h-[10rem] cursor-pointer`}
              />
            ))}
        </div>
        <ChevronRight
          className="cursor-pointer w-[3rem] h-[3rem] fill-gold"
          onClick={() => {
            if (index < mockUps.length - 1) {
              setIndex(index + 1);
            }
          }}
        />
      </div>
    </div>
  );
}

export { CarousselMockUps };

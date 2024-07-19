import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { IPhotosList } from "../../utils/types";

interface IHomeCardProps {
    mockUps: IPhotosList[];
}

function HomeCard({mockUps}: IHomeCardProps): JSX.Element {
    const [mockUpIndex, setMockUpIndex] = useState<number>(0);

    useEffect(() => {
      if (mockUps.length > 0) {
        const interval = setInterval(() => {
          setMockUpIndex((prevIndex) => (prevIndex + 1) % mockUps.length);
        }, 3000);
  
        return () => clearInterval(interval);
      }
    }, [mockUps]);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center p-[1rem] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: mockUps && mockUps.length > 0 ? `url(${mockUps[mockUpIndex].src})` : 'none' }}
    >
      <div className="flex flex-col space-y-[1rem] items-end mt-[17rem] md:mt-[8rem]">
          <div className="font-bold text-center w-full">
              <p className="text-gold text-[4rem] md:text-[7rem] amsterdam mb-[1rem]">Villa <span className="darlene">CALM</span></p>
              <p className="text-white text-[2rem] md:text-[3rem] darlene">Khao Phra Village, BOPHUT</p>
          </div>
          <Button contact={false} />
      </div>
      <div className="flex space-x-[.5rem] md:mt-[18rem]">
        {mockUps.map((_, index) => (
            <button
                key={index}
                onClick={() => setMockUpIndex(index)}
                className="p-[.5rem] rounded-full transition-colors duration-300"
                style={{ backgroundColor: `${mockUpIndex === index ? `#CEAE01` : 'rgb(156 163 175)'}`}}
            />
        ))}
      </div>
    </div>
  );
}

export { HomeCard };
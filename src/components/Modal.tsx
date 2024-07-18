import React, { Dispatch, SetStateAction } from "react";
import { IPhotosList } from "../utils/types";
import { ChevronLeft, ChevronRight, Cross } from "../assets/images/svgComponents";

interface IModalProps {
  photosList: IPhotosList[];
  currentImage: number;
  setCurrentImage: Dispatch<SetStateAction<number>>;
  setViewerIsOpen: Dispatch<SetStateAction<boolean>>;
}

function Modal({ photosList, currentImage, setCurrentImage, setViewerIsOpen }: IModalProps): JSX.Element {
  
    const closeModal = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    
    const showPrevImage = () => {
        setCurrentImage((currentImage - 1 + photosList.length) % photosList.length);
    };

    const showNextImage = () => {
        setCurrentImage((currentImage + 1) % photosList.length);
    };
    
    return (
        <div 
            className="px-[.5rem] w-screen max-w-screen h-screen max-h-screen bg-[#EFEFEF]/[.70] fixed inset-0 z-50 flex flex-col bg-center bg-contain bg-no-repeat"
            style={{ zIndex: 999999, backgroundImage: `url(${photosList[currentImage].src})`}}
        >
            <div className="absolute top-0 right-0 p-[1rem]">
                <Cross onClick={closeModal} className="cursor-pointer w-[3rem] h-[3rem] opacity-60" />
            </div>
            <div className="flex-1 flex items-center justify-between">
                <ChevronLeft onClick={showPrevImage} className="cursor-pointer w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] fill-black" />
                <ChevronRight onClick={showNextImage} className="cursor-pointer w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] fill-black" />
            </div>
        </div>
    );
}

export { Modal };
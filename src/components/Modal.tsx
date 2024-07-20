import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { IPhotosList } from "../utils/types";
import { ChevronLeft, ChevronRight, Cross } from "../assets/images/svgComponents";
import { transformTitle } from "../utils/functions";

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

    const showPrevImage = (e: React.MouseEvent | KeyboardEvent ) => {
        e.stopPropagation();
        setCurrentImage(currentImage !== 0 ? currentImage - 1 : currentImage);
    };

    const showNextImage = (e: React.MouseEvent | KeyboardEvent) => {
        e.stopPropagation();
        setCurrentImage(currentImage !== photosList.length - 1 ? currentImage + 1 : currentImage);
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowLeft') {
            showPrevImage(e);
        } else if (e.key === 'ArrowRight') {
            showNextImage(e);
        }
    }, [showPrevImage, showNextImage]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div 
            className="px-[.5rem] w-screen max-w-screen h-screen max-h-screen bg-[#EFEFEF]/[.70] fixed inset-0 z-50 flex flex-col items-center justify-center bg-center bg-contain bg-no-repeat"
            style={{ zIndex: 999999, backgroundImage: `url(${photosList[currentImage].src})`}}
            onClick={closeModal}
        >
            <div className="absolute top-0 right-0 p-[1rem]" onClick={(e) => e.stopPropagation()}>
                <Cross onClick={closeModal} className="cursor-pointer w-[3rem] h-[3rem] opacity-60" />
            </div>
            <div className="flex-1 flex items-center justify-between w-full h-full">
                <div className="p-[1rem]" onClick={showPrevImage}>
                    <ChevronLeft className="cursor-pointer w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] fill-gold" />
                </div>
                <div className="flex-1" />
                <div className="p-[1rem]" onClick={showNextImage}>
                    <ChevronRight className="cursor-pointer w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] fill-gold" />
                </div>
            </div>
            {!photosList[currentImage].folder.includes('maquettes') && (
                <p className="text-black font-bold text-[2rem] darlene p-[1rem]">{transformTitle(photosList[currentImage].folder).toUpperCase()}</p>
            )}
        </div>
    );
}

export { Modal };
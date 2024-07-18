import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import { IAllImages } from "../../utils/types";
import { Camera } from "../../assets/images/svgComponents";

interface IConstructionCardProps {
  folderList: IAllImages;
  setFolderderName: Dispatch<SetStateAction<string>>;
  setCurrentImage: Dispatch<SetStateAction<number>>;
  setViewerIsOpen: Dispatch<SetStateAction<boolean>>;
}

function ConstructionCard({ folderList, setFolderderName, setCurrentImage, setViewerIsOpen }: IConstructionCardProps): JSX.Element {
    const folderName = folderList.folder.charAt(0).toUpperCase() + folderList.folder.slice(1);
    const clonedList = folderList.list.map(photo => ({ ...photo }));
  
    const openLightbox = useCallback((event: React.MouseEvent, { photo, index }: { photo: any, index: number }) => {
        setFolderderName(folderList.folder);
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    
  return (
    <>
        <div className="w-full flex flex-col space-y-[2rem] justify-center pt-[1rem]">
            <div className="flex items-center space-x-[.5rem]">
                <Camera className="w-[2.5rem] h-[2.5rem]" fill="#B3A272"/>
                <p className="text-[1.5rem] text-gold font-bold">{folderName.replace('-', ' ')}</p>
            </div>
            {folderName !== 'Video' ? (
                <Gallery photos={clonedList} onClick={openLightbox} />  
            ) : (

                <video
                    className="rounded-[.5rem]"
                    controls
                    muted
                >
                <source src={folderList.list[0].src} type="video/mp4" />
                <track kind="captions" />
                Votre navigateur ne supporte pas la vidéo.
                </video>
            )}
        </div>
    </>
  );
}

export { ConstructionCard };
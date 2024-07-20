import React, { useEffect, useState } from "react";
import { fetchAllImages } from '../utils/apiRequests';
import { useDispatch, useSelector } from "react-redux";
import { IAllImages, IPhotosList } from '../utils/types';
import { ConstructionCard } from "../components/construction/ConstructionCard";
import { getAllPictures, sortFolders } from "../utils/functions";
import { Modal } from "../components/Modal";
import { v4 } from "uuid";
import { Loader } from "../assets/images/svgComponents";

function Construction (): JSX.Element {
  const dispatch = useDispatch();
  const images = useSelector((state: any) => state.images);

  const [folderList, setFolderList] = useState<IAllImages[]>([]);
  const [allPictures, setAllPictures] = useState<IPhotosList[]>([]);
  const [pictureName, setPictureName] = useState<string>('');
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchAllImages(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (images.allImages.length > 0) {
      const sortedFolder = [...images.allImages].sort(sortFolders);
      setFolderList(sortedFolder);

      const allPicturesList = getAllPictures(sortedFolder);
      setAllPictures(allPicturesList);

    }
  }, [images.allImages]);

  useEffect(() => {
    if (pictureName) {
      const index = allPictures.findIndex(item => item.title === pictureName);
      if (index !== -1) {
        setCurrentImage(index);
      }
    }
  }, [pictureName, allPictures]);

  return (
    <>
      {viewerIsOpen && (
        <Modal photosList={allPictures} currentImage={currentImage} setCurrentImage={setCurrentImage} setViewerIsOpen={setViewerIsOpen}/>
      )}
      <div className="p-[1rem] w-full h-full flex flex-col space-y-[2rem]">
        {folderList.length > 0 ? (
          <>
            {folderList.map((folder: IAllImages) => (
              <div key={v4()}>
                <ConstructionCard folderList={folder} setPictureName={setPictureName} setViewerIsOpen={setViewerIsOpen}/>
              </div>
            ))}
          </>
        ) : (
          <div className="w-full h-screen flex space-x-[2rem] items-center justify-center">
            <Loader className="animate-spin h-[4rem] w-[4rem] stroke-gold" />
            <p className="text-[2rem] text-gold">Loading</p>
          </div>
        )}
      </div> 
    </>
  );
};

export { Construction };

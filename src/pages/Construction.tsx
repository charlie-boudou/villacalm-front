import React, { useEffect, useState } from "react";
import { fetchAllImages } from '../utils/apiRequests';
import { useDispatch, useSelector } from "react-redux";
import { IAllImages } from '../utils/types';
import { ConstructionCard } from "../components/construction/ConstructionCard";
import { sortFolders } from "../utils/functions";
import { Modal } from "../components/Modal";
import { v4 } from "uuid";
import { Loader } from "../assets/images/svgComponents";

function Construction (): JSX.Element {
  const dispatch = useDispatch();
  const images = useSelector((state: any) => state.images);

  const [folderList, setFolderList] = useState<IAllImages[]>([]);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
  const[folderName, setFolderName] = useState<string>('octobre-2023');

  useEffect(() => {
    fetchAllImages(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (images.allImages.length > 0) {
      const sortedFolder = [...images.allImages].sort(sortFolders);
      setFolderList(sortedFolder);
    }
  }, [images.allImages]);

  return (
    <>
      {viewerIsOpen && (
        <Modal photosList={folderList[folderList.findIndex(item => item.folder === folderName)].list} currentImage={currentImage} setCurrentImage={setCurrentImage} setViewerIsOpen={setViewerIsOpen}/>
      )}
      <div className="p-[1rem] w-full h-full flex flex-col space-y-[2rem]">
        {folderList.length > 0 ? (
          <>
            {folderList.map((folder: IAllImages) => (
              <div key={v4()}>
                <ConstructionCard folderList={folder} setFolderderName={setFolderName} setCurrentImage={setCurrentImage} setViewerIsOpen={setViewerIsOpen}/>
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

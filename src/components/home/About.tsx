import React, { useState } from "react";
import { CarousselMockUps } from "./CarousselMockUps";
import { IPhotosList } from "../../utils/types";
import { useTranslation } from 'react-i18next';
import { featuresInfos } from "../../utils/datas";
import { Point } from "../../assets/images/svgComponents";
import { Button } from "../Button";
import { v4 } from "uuid";
import { Modal } from "../Modal";

interface IAboutProps {
    mockUps: IPhotosList[];
}

function About({mockUps}: IAboutProps): JSX.Element { 
    const { t } = useTranslation();

    const [currentImage, setCurrentImage] = useState<number>(0);
    const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

  return (
    <>
        {viewerIsOpen && (
            <Modal photosList={mockUps} currentImage={currentImage} setCurrentImage={setCurrentImage} setViewerIsOpen={setViewerIsOpen} />
        )}
        <div id="about" className="w-full h-full flex flex-col items-start space-y-[1rem] p-[1rem] text-[1.5rem]">
            <div className="w-full">
                <CarousselMockUps mockUps={mockUps} setCurrentImage={setCurrentImage} setViewerIsOpen={setViewerIsOpen} />
            </div>
            <div className="w-full md:w-[80%] m-auto md:p-[1rem]">
                <div className="text-justify">
                    {t('mainDescription')}
                </div>
                <div className="flex items-center justify-end pt-[.5rem]">
                    <Button contact/>
                </div>
                <div className="mt-[2rem]">
                    <p className="mb-[1rem] text-[2rem]">{featuresInfos(t).title}</p>
                    <div>
                        {featuresInfos(t).list.map((item) => (
                            <div key={v4()} className="flex items-center space-x-[.5rem] mb-[.5rem]">
                                <Point fill="#B3A272" className="w-[1.rem] h-[1rem]"/>
                                <p>{item.name} {item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export { About };
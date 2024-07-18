import axios from "axios";
import { IPhotosList } from "./types";
import { addAllImages, addMockUps } from "../reducers/images";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { groupImagesByFolder } from "./functions";

const apiUrl = process.env.REACT_APP_BACK_API_URL;

export const fetchMockUps = async (dispatch: Dispatch<UnknownAction>) => {
    const tab: IPhotosList[] = [];
    try {
      const response = await axios.get(`${apiUrl}/pictures/mockup`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      if (response.data.result) {
        response.data.datas.map((data: any) => {
          tab.push({
            title: data.filename,
            src: data.secure_url,
            width: data.width,
            height: data.height
          });
        });

        tab.sort((a, b) => parseInt(a.title) - parseInt(b.title));

        dispatch(addMockUps(tab));
      }
    } catch (err) {
      console.log('error', err);
    }
};

export const fetchAllImages = async (dispatch: Dispatch<UnknownAction>) => {
  try {
    const response = await axios.get(`${apiUrl}/pictures/all`);
    if (response.data.result) {
      dispatch(addAllImages(groupImagesByFolder(response.data.datas)));
    }
  } catch (err) {
    console.log('error', err);
  }
};


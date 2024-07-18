import { createSlice } from '@reduxjs/toolkit';
import { IImagesState } from '../utils/types';

const initialState: IImagesState = {
 mockUps: [],
 allImages: [],
};

export const imagesSlice = createSlice({
 name: 'images',
 initialState,
 reducers: {
   addMockUps: (state, action) => {
    state.mockUps = action.payload;
   },
   addAllImages: (state, action) => {
    state.allImages = action.payload;
   },
 },
});

export const { addMockUps, addAllImages } = imagesSlice.actions;
export default imagesSlice.reducer;
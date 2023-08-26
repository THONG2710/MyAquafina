import { createReducer } from "@reduxjs/toolkit";
import { fetchImages } from "../Thunks/ImagesThunks";

export type image = {
    link: string;
}

export type imageState = {
    list: image[];
}

export const INITIAL_STATE: imageState = {
    list: [],
}

export const ImageReducer = createReducer(
    INITIAL_STATE,
    (builder) => {
        builder
        .addCase(fetchImages.pending, (state, action) => {
            // console.log('pending' + state.list[0]);
        })
        .addCase(fetchImages.fulfilled, (state, action) => {
            state.list = action.payload;
        })
        .addCase(fetchImages.rejected, (state, action) => {
            // console.log(state);
        })
    }
)

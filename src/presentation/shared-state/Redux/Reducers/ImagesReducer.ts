import { createReducer } from "@reduxjs/toolkit";
import { fetchImages } from "../Thunks/ImagesThunks";

export type image = {
    gift: {id: string, name: string, image: string, quantity: number, value: string}
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
        .addCase(fetchImages.fulfilled, (state, action: any) => {
            state.list = action.payload;
        })
        .addCase(fetchImages.rejected, (state, action) => {
            // console.log(state);
        })
    }
)

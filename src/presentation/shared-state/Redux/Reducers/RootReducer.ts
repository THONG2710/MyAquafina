import { combineReducers } from "@reduxjs/toolkit";
import { AuthenticationReducer } from "./AuthenticationReducer";
import { ImageReducer } from "./ImagesReducer";

export const RootReducer = combineReducers({
    authentication: AuthenticationReducer,
    ImageReducer: ImageReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

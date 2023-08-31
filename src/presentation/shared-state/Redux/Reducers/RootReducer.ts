import { combineReducers } from "@reduxjs/toolkit";
import { AuthenticationReducer } from "./AuthenticationReducer";
import { ImageReducer } from "./ImagesReducer";
import { UsersReducer } from "./GetUsersReducer";
import { LoginReducer } from "./LoginReducer";

export const RootReducer = combineReducers({
    authentication: AuthenticationReducer,
    ImageReducer: ImageReducer,
    UsersReduer: UsersReducer,
    LoginReducer: LoginReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

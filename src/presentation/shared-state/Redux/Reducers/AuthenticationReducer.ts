import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Login } from "../Actions/AuthenticationActions";
import { fetchImages } from "../Thunks/ImagesThunks";


export type AuthenticationState = {
    isLogged: boolean;
}

export const INITIAL_STATE: AuthenticationState = {
    isLogged: false,
} 

export const AuthenticationReducer = createReducer(
    INITIAL_STATE, (builder) => {
    builder
        .addCase(Login, (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload
        })
})


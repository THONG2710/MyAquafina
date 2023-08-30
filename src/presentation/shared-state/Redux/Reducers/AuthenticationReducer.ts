import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Login, checkOTP } from "../Actions/AuthenticationActions";
import { fetchImages } from "../Thunks/ImagesThunks";


export type AuthenticationState = {
    isLogged: boolean;
    checkOTP: boolean;
}

export const INITIAL_STATE: AuthenticationState = {
    isLogged: false,
    checkOTP: false,
} 

export const AuthenticationReducer = createReducer(
    INITIAL_STATE, (builder) => {
    builder
        .addCase(Login, (state, action: PayloadAction<boolean>) => {
            state.isLogged = action.payload;
        })
        .addCase(checkOTP, (state, action: PayloadAction<boolean>) => {
            state.checkOTP = action.payload;
        })
})


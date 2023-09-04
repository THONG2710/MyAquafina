import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { Login, checkOTP, getMyPlace, showModalLogin } from "../Actions/AuthenticationActions";
import { fetchImages } from "../Thunks/ImagesThunks";

export type AuthenticationState = {
    isLogged: boolean;
    checkOTP: boolean;
    showModalLogin?: boolean;
    myPlace?: number;
}

export const INITIAL_STATE: AuthenticationState = {
    isLogged: false,
    checkOTP: false,
    showModalLogin: false,
    myPlace: 0,
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
        .addCase(showModalLogin, (state, action: PayloadAction<boolean>) => {
            state.showModalLogin = action.payload
        })
        .addCase(getMyPlace, (state, action: PayloadAction<number>) => {
            state.myPlace = action.payload;
        })
})


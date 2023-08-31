import { PayloadAction, createAction, createReducer } from "@reduxjs/toolkit";
import { user } from "./GetUsersReducer";
import { fetchLogin } from "../Thunks/LoginThunk";
import firestore from '@react-native-firebase/firestore';

export type currentUser = {
    user: { id: string, phoneNumber: string, name: string, scores: number, avatar: string },
    isLoading: boolean
}

export const resetUser = createAction('LoginReducer/resetUser');

export const INITIAL_LOGIN_STATE: currentUser = {
    user: { id: '', phoneNumber: '', name: '', scores: 0, avatar: 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg' },
    isLoading: false,
}

export const LoginReducer = createReducer(
    INITIAL_LOGIN_STATE,
    (builder) => {
        builder
            .addCase(fetchLogin.pending, (state, action) =>  {
                state.isLoading = true;
            })
            .addCase(fetchLogin.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(fetchLogin.rejected, (state, action) => {

            })
            .addCase(resetUser, (state) => {
                state.user = { id: '', phoneNumber: '', name: '', scores: 0, avatar: 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg' }
            })

    }
)
import { createReducer } from "@reduxjs/toolkit";
import { fetchSignUp, signUpAccount } from "../Thunks/SignUpThunk";

export const SignUpInitialState: signUpAccount = {
    avatar: 'https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg',
    name: '',
    phoneNumber: '',
    scores: 0
}

export const SignUpReducer = createReducer(
    SignUpInitialState,
    (builder) => {
        builder
            .addCase(fetchSignUp.fulfilled, (state, action) => {
                console.log(state);
            })
    }
)
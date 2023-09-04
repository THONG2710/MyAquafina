import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

export interface signUpAccount {
    name: string;
    phoneNumber: string;
    avatar: string;
    scores: number;
}

export const SIGNUP = 'SIGNUP';

export const fetchSignUp = createAsyncThunk(
    SIGNUP,
    async (params: signUpAccount) => {
        try {
            const collectionRef = firestore().collection('users').add(params).then(() => console.log('success'))
            return collectionRef
        } catch (error) {
            console.log('fetch user failed: ' + error);
        }
    }
)
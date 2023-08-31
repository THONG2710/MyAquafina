import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';


export const LOGIN = 'LOGIN';

export interface User {
    phoneNumber: string;
}

export const fetchLogin = createAsyncThunk(
    LOGIN,
    async (params: User) => {
        try {
            const collectionRef = firestore().collection('users').where('phoneNumber', '==', params.phoneNumber).limit(1)
            const querySnapshot = await collectionRef.get();
            const listUsers: any[] = [];
            querySnapshot.forEach(data => {
                const info = data.data();
                const id = data.id;
                const user = {id, ...info};
                listUsers.push(user);
            })
            
            return listUsers[0];
        } catch (error) {
            console.log('fetch user failed: ' + error);
        }
    }
)
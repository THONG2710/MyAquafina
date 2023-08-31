import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

export const GET_USERS = 'GET_USERS';

export const fetchUsers = createAsyncThunk(
    GET_USERS,
    async () => {
        try {
            const collectionRef = firestore().collection('users').orderBy('scores', 'desc').limit(10);
            const querySnapshot = await collectionRef.get();
            const listUsers: any[] = [];
            querySnapshot.forEach(data => {
                const info = data.data();
                const id = data.id;
                const user = {id, ...info};
                listUsers.push(user);
            })
            return listUsers;
        } catch (error) {
            console.log('fetch user failed: ' + error);
        }
    }
)
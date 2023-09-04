import { createAsyncThunk } from "@reduxjs/toolkit";
import firestore from '@react-native-firebase/firestore';

export const GET_IMAGE = 'GET_IMAGE';

export const fetchImages = createAsyncThunk(
    GET_IMAGE,
    async () => {
        try {
            const collectionRef = firestore().collection('presents');
            const querySnapshot = await collectionRef.get();
            const listGift: any[] = [];
            querySnapshot.forEach(data => {
                const info = data.data();
                const id = data.id;
                const gift = {id, ...info};
                listGift.push(gift);
            })
            return listGift;
        } catch (error) {
            console.log('fetch gift failed: ' + error);
        }
    }
)

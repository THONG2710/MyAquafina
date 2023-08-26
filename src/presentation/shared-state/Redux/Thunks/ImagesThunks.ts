import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_IMAGE = 'GET_IMAGE';

export const fetchImages = createAsyncThunk(
    GET_IMAGE,
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())      
        return response;
    }
)

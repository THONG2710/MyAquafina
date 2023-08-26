import {Action, AnyAction, Middleware, combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { AuthenticationReducer } from './Reducers/AuthenticationReducer';
import { ImageReducer } from './Reducers/ImagesReducer';
import { RootReducer } from './Reducers/RootReducer';

export const store = configureStore({
    reducer: RootReducer,
});

export type AppDispatch = typeof store.dispatch;

import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { fetchUsers } from "../Thunks/GetUsersThunks";
import { useAppDispatch } from "../Hook/Hook";

export type user = {
    id: string;
    name: string;
    phoneNumber: string;
    scores: number;
    avatar: string;
}

export type userState = {
    listUsers: user[];
    isLoading: boolean;
}

export const INITIAL_USER_STATE: userState = {
    listUsers: [],
    isLoading: false,
}

export const UsersReducer = createReducer(
    INITIAL_USER_STATE,
    (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<any>) => {
                state.listUsers = action.payload;
                state.isLoading = false;
            })
    }
)
import { createSlice } from "@reduxjs/toolkit";

export const pageState = createSlice({
    initialState: {
        isLoading: true,
        error: null as unknown | null,
    },
    name: "home",
    reducers: {
        setLoading(state, action: { payload: boolean }) {
            state.isLoading = action.payload;
        },
        setError(state, action: { payload: unknown | null }) {
            state.error = action.payload;
        },
    },
});

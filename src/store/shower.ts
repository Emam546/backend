import { createSlice } from "@reduxjs/toolkit";
type DataType = {
    dim: {
        x: number;
        y: number;
    };
    film?: Film;
    state: boolean;
};
export const ShowerSlice = createSlice({
    initialState: {
        dim: {
            x: -1000,
            y: -1000,
        },
        state: false,
    } as DataType,
    name: "shower",

    reducers: {
        setShower(
            state,
            action: {
                payload: Omit<DataType, "state">;
            }
        ) {
            if (!state.state) return { ...action.payload, state: true };
        },
        setShowState(
            state,
            action: {
                payload: boolean;
            }
        ) {
            state.state = action.payload;
        },
        setFilmData(state, action: { payload?: Film }) {
            state.film = action.payload;
        },
    },
});

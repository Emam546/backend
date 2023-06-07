import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { pageState } from "./loadingError";
import { ShowerSlice as ShowerSlice } from "./shower";
export const ShowerActions = ShowerSlice.actions;
export const pageActions = pageState.actions;
export const store = configureStore({
    reducer: {
        page: pageState.reducer,
        shower: ShowerSlice.reducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

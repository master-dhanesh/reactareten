import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
    errors: null,
};

export const galleryReducer = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        addimages: (state, action) => {
            state.images = action.payload;
        },
        adderror: (state, action) => {
            state.errors = action.payload;
        },
        removeerror: (state, action) => {
            state.errors = null;
        },
    },
});

export default galleryReducer.reducer;
export const { addimages, adderror, removeerror } = galleryReducer.actions;

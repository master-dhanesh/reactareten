import { configureStore } from "@reduxjs/toolkit";

import galleryReducer from "./reducers/galleryReducer";
export const store = configureStore({
    reducer: {
        galleryReducer,
    },
});

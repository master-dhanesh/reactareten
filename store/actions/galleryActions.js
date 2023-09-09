import { addimages, adderror, removeerror } from "../reducers/galleryReducer";
import axios from "@/utils/axios";

export const asyncAddImages = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/v2/list?limit=10");
        dispatch(addimages(data));
    } catch (error) {
        dispatch(adderror(error.response.data));
    }
};

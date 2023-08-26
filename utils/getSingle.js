import axios from "./axios";

export const GetSingle = async (id) => {
    try {
        const { data } = await axios.get(`posts/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const wait = (ms) => {
    return new Promise((res) => setTimeout(res, ms));
};

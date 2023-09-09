import axios from "axios";

const instance = axios.create({
    baseURL: "https://picsum.photos/",
    // withCredentials: true
});

export default instance;

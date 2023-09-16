import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3080/api/v1",
    // withCredentials: true
});

export default instance;

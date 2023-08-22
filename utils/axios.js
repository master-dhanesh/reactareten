import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    // withCredentials: true
});

export default instance;

// export const wait = (ms) => {
//     return new Promise((res) => setTimeout(res, ms));
// };

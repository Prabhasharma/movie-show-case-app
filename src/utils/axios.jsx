import axios from "axios";



const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
    },
    params: {
        api_key: import.meta.env.VITE_REACT_APP_API_KEY, 
    }
});

export default instance;

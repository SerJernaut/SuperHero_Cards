import {ACCESS_TOKEN_KEY} from "../../constants";
import {refreshTokens} from "../index";
import axios from 'axios';
import {URL} from "../../constants/URLs";


const axiosInstance = axios.create({baseURL: URL["API-URL"]});


axiosInstance.interceptors.request.use( config => {
    config.headers.authorization = sessionStorage.getItem( ACCESS_TOKEN_KEY );
    return config;
}, (err) => Promise.reject(err));


axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const { response: { status }, config } = error;
        switch (status) {
            case 419: {
                await refreshTokens();
                return axiosInstance.request( config );
            }
            default:
                throw error;
        }
    }
);


export default axiosInstance;
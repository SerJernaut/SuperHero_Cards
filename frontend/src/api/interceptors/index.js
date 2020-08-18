import axios from 'axios';
import {URL} from "../../constants/URLs";

const axiosInstance = axios.create({baseURL: URL["API-URL"]});

export default axiosInstance;
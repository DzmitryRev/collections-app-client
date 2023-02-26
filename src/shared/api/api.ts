import axios from "axios";
import { API_URL } from "../constants/backend";

export const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


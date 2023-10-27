import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
const apiUserUrl = import.meta.env.VITE_REACT_APP_API_USER_URL;

export const api = axios.create({
    baseURL: apiUrl,
    headers: { 'accept': 'application/json' }
});

export const apiUser = axios.create({
    baseURL: apiUserUrl,
    headers: { 'accept': 'application/json', 'Content-Type': 'application/json' }
})
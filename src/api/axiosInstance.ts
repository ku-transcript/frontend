import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// Create an Axios instance with default options
const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;

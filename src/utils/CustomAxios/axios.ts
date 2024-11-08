import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY;
        if (token) {
            config.headers['X-Auth-Token'] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;

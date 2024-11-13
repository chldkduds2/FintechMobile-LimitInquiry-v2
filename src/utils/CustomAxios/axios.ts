import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    timeout: 10000,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
            return Promise.reject();
        }
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export const setAuthorizationToken = (token: string | null) => {
    if (token) {
        axiosInstance.defaults.headers['X-Auth-Token'] = token;
    } else {
        delete axiosInstance.defaults.headers['X-Auth-Token'];
    }
};

export default axiosInstance;

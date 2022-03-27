import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
});


const excludedUrls = ['/auth/local'];
axiosInstance.interceptors.request.use(
    config => {
        if (!excludedUrls.includes(config.url)) {
            const jwt = localStorage.getItem('jwt')
            config.headers['Authorization'] = jwt ? `bearer ${jwt}`: ``;
        }
        return config;
    },
    error => Promise.reject(error)
)

export default axiosInstance;


import axios from 'axios';
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    
    headers:{
        credentials: 'include',
        method: 'post',
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    
})

axiosInstance.interceptors.request.use(
    (config) => {
      // Update Authorization header with the latest token from localStorage
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


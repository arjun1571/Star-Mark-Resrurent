
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();


  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
  });

  // Interceptor to inject authorization header
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Interceptor to handle unauthorized and forbidden responses
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        await logOut(); // Assuming logOut is an asynchronous function
        navigate('/login'); // Navigate to the login page
      }
      return Promise.reject(error);
    }
  );

  return [axiosSecure];
};

export default useAxiosSecure;

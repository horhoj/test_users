import axios, { AxiosRequestConfig } from 'axios';
import { User } from '@entitiesTypes/users';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const fetchUsers = async () => {
  const requestConfig: AxiosRequestConfig = {
    url: '/users',
    method: 'get',
  };

  const response = await axiosInstance.request<User[]>(requestConfig);

  return response.data;
};

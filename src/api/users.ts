import axios, { AxiosRequestConfig } from 'axios';
import { User } from '@entitiesTypes/users';
import { Post } from '@entitiesTypes/posts';
import { UserPostListData } from '@entitiesTypes/userPostListData';

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

export const fetchUserPostList = async (
  userId: string,
): Promise<UserPostListData> => {
  const userRequestConfig: AxiosRequestConfig = {
    url: `/users/${userId}`,
    method: 'get',
  };

  const userResponse = await axiosInstance.request<User>(userRequestConfig);

  const user = userResponse.data;

  const userPostListRequestConfig: AxiosRequestConfig = {
    url: `/users/${userId}/posts`,
    method: 'get',
  };

  const userPostListRequestResponse = await axiosInstance<Post[]>(
    userPostListRequestConfig,
  );

  const postList = userPostListRequestResponse.data;

  return { user, postList };
};

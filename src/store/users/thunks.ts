import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@api/index';
import { SLICE_NAME } from './types';

export const fetchUserListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchUserListThunk`,
  async () => {
    return api.users.fetchUsers();
  },
);

export const fetchUserPostListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchUserPostListThunk`,
  async (userId: string) => {
    return api.users.fetchUserPostList(userId);
  },
);

interface FetchUserAlbumListThunk {
  userId: string;
  successCb: () => void;
}

export const fetchUserAlbumListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchUserAlbumListThunk`,
  async ({ userId, successCb }: FetchUserAlbumListThunk) => {
    const response = await api.users.fetchUserAlbumList(userId);
    successCb();
    return response;
  },
);

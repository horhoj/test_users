import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@api/index';
import { RootState } from '@store/types';
import { SLICE_NAME } from './types';
import { actions } from './slice';

export const fetchUserListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchUserListThunk`,
  async (_, { getState }) => {
    const userList = (getState() as RootState).users.fetchUserListRequest.data;

    if (userList) {
      return userList;
    }

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
  userId: number;
}

export const fetchUserAlbumListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchUserAlbumListThunk`,
  async ({ userId }: FetchUserAlbumListThunk, { dispatch }) => {
    const response = await api.users.fetchUserAlbumList(userId);
    dispatch(actions.setAlbumListUserId(userId));
    return response;
  },
);

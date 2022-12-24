import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@api/index';
import { SLICE_NAME } from './types';

export const fetchUserListThunk = createAsyncThunk(
  `${SLICE_NAME}/fetchUserListThunk`,
  async () => {
    return api.users.fetchUsers();
  },
);

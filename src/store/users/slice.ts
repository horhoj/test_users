import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@store/users/types';
import { RequestSliceStateProperty } from '@store/types';
import {
  makeRequestCaseToBuilder,
  makeRequestSliceStateProperty,
} from '@store/helpers';
import { User } from '@entitiesTypes/users';
import { UserPostListData } from '@entitiesTypes/userPostListData';
import * as thunks from './thunks';

interface InitialState {
  fetchUserListRequest: RequestSliceStateProperty<User[]>;
  fetchUserPostListRequest: RequestSliceStateProperty<UserPostListData>;
}

const initialState: InitialState = {
  fetchUserListRequest: makeRequestSliceStateProperty<User[]>(),
  fetchUserPostListRequest: makeRequestSliceStateProperty<UserPostListData>(),
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    userPostListPageClear: (state) => {
      state.fetchUserPostListRequest.data = null;
      state.fetchUserPostListRequest.error = null;
    },
  },
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchUserListThunk,
      'fetchUserListRequest',
    );
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchUserPostListThunk,
      'fetchUserPostListRequest',
    );
  },
});

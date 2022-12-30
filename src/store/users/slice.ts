import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@store/users/types';
import { RequestSliceStateProperty } from '@store/types';
import {
  makeRequestCaseToBuilder,
  makeRequestSliceStateProperty,
} from '@store/helpers';
import { User } from '@entitiesTypes/users';
import { UserPostListData } from '@entitiesTypes/userPostListData';
import { Album } from '@entitiesTypes/albums';
import * as thunks from './thunks';

interface InitialState {
  albumListUserId: number | null;
  fetchUserListRequest: RequestSliceStateProperty<User[]>;
  fetchUserPostListRequest: RequestSliceStateProperty<UserPostListData>;
  fetchUserAlbumListRequest: RequestSliceStateProperty<Album[]>;
}

const initialState: InitialState = {
  albumListUserId: null,
  fetchUserListRequest: makeRequestSliceStateProperty<User[]>(),
  fetchUserPostListRequest: makeRequestSliceStateProperty<UserPostListData>(),
  fetchUserAlbumListRequest: makeRequestSliceStateProperty<Album[]>(),
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    userPostListPageClear: (state) => {
      state.fetchUserPostListRequest.data = null;
      state.fetchUserPostListRequest.error = null;
    },

    setAlbumListUserId: (state, action: PayloadAction<number | null>) => {
      state.albumListUserId = action.payload;
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
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchUserAlbumListThunk,
      'fetchUserAlbumListRequest',
    );
  },
});

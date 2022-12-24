import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from '@store/users/types';
import { RequestSliceStateProperty } from '@store/types';
import {
  makeRequestCaseToBuilder,
  makeRequestSliceStateProperty,
} from '@store/helpers';
import { User } from '@entitiesTypes/users';
import * as thunks from './thunks';

interface InitialState {
  fetchUserListRequest: RequestSliceStateProperty<User[]>;
}

const initialState: InitialState = {
  fetchUserListRequest: makeRequestSliceStateProperty<User[]>(),
};

export const { reducer, actions } = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    makeRequestCaseToBuilder<InitialState>(
      builder,
      thunks.fetchUserListThunk,
      'fetchUserListRequest',
    );
  },
});

import { RootState } from '@store/types';

export const getFetchUserListRequest = (state: RootState) =>
  state.users.fetchUserListRequest;

export const getFetchUserPostListRequest = (state: RootState) =>
  state.users.fetchUserPostListRequest;

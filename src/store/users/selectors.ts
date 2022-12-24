import { RootState } from '@store/types';

export const getFetchUserListRequest = (state: RootState) =>
  state.users.fetchUserListRequest;

export const getFetchUserPostListRequest = (state: RootState) =>
  state.users.fetchUserPostListRequest;

export const getFetchUserAlbumListRequest = (state: RootState) =>
  state.users.fetchUserAlbumListRequest;

export const getIsLoading = (state: RootState) =>
  state.users.fetchUserPostListRequest.isLoading ||
  state.users.fetchUserAlbumListRequest.isLoading ||
  state.users.fetchUserListRequest.isLoading;

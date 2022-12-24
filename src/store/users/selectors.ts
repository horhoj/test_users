import { RootState } from '@store/types';

export const getUserListRequest = (state: RootState) =>
  state.users.fetchUserListRequest;

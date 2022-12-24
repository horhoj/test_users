import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from '@store/users';
import { appSlice } from './app';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appSlice.reducer,
    users: usersSlice.reducer,
  },
});

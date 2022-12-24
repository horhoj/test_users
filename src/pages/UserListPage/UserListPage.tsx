import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { usersSlice } from '@store/users';
import { UserCard } from '@components/UserCard';
import { getRoutePath } from '@router/helpers';
import { appSlice } from '@store/app';
import styles from './UserListPage.module.scss';

export const UserListPage: FC = () => {
  const dispatch = useAppDispatch();

  const userListRequest = useAppSelector(
    usersSlice.selectors.getFetchUserListRequest,
  );

  useEffect(() => {
    dispatch(usersSlice.thunks.fetchUserListThunk());
  }, []);

  const handleUserAlbumsBtnClk = (id: number) => {
    console.log('handleUserAlbumsBtnClk', id);
  };

  const handleUserPostsBtnClk = (id: number) => {
    console.log('handleUserPostsBtnClk', id);
    const path = getRoutePath('userPostList', id.toString());
    dispatch(appSlice.actions.redirect(path));
  };

  return (
    <div className={styles.wrap}>
      {userListRequest.data &&
        userListRequest.data.map((user, index) => (
          <UserCard
            key={user.id}
            user={user}
            index={index + 1}
            onAlbumsBtnClk={() => handleUserAlbumsBtnClk(user.id)}
            onPostsBtnClk={() => handleUserPostsBtnClk(user.id)}
          />
        ))}
    </div>
  );
};

import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { usersSlice } from '@store/users';
import { UserCard } from '@components/UserCard';
import { getRoutePath } from '@router/helpers';
import { appSlice } from '@store/app';
import { Modal } from '@components/Modal';
import { AlbumCardList } from '@components/AlbumCardList';
import styles from './UserListPage.module.scss';

export const UserListPage: FC = () => {
  const dispatch = useAppDispatch();

  const [albumListUserId, setAlbumListUserId] = useState<number | null>(null);

  const userListRequest = useAppSelector(
    usersSlice.selectors.getFetchUserListRequest,
  );

  const albumsListRequest = useAppSelector(
    usersSlice.selectors.getFetchUserAlbumListRequest,
  );

  useEffect(() => {
    dispatch(usersSlice.thunks.fetchUserListThunk());
  }, []);

  const handleUserAlbumsBtnClk = (id: number) => {
    const successCb = () => {
      setAlbumListUserId(id);
    };

    dispatch(
      usersSlice.thunks.fetchUserAlbumListThunk({
        userId: id.toString(),
        successCb,
      }),
    );
  };

  const handleUserPostsBtnClk = (id: number) => {
    const path = getRoutePath('userPostList', id.toString());
    dispatch(appSlice.actions.redirect(path));
  };

  const user = userListRequest.data?.find(
    (user) => user.id === albumListUserId,
  );

  const handleModalClose = () => setAlbumListUserId(null);

  return (
    <div className={styles.wrap}>
      {userListRequest.error && <div>userListRequest ERROR!</div>}
      {albumsListRequest.error && <div>albumsListRequest ERROR!</div>}
      <Modal isOpen={Boolean(albumListUserId)} onClose={handleModalClose}>
        {albumsListRequest.data && user && (
          <AlbumCardList
            albumList={albumsListRequest.data}
            user={user}
            onClose={handleModalClose}
          />
        )}
      </Modal>
      <div className={styles.userListWrap}>
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
    </div>
  );
};

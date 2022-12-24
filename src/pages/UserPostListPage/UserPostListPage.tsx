import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { usersSlice } from '@store/users';
import { PostCard } from '@components/PostCard';
import { getRoutePath } from '@router/helpers';
import { appSlice } from '@store/app';
import { Button } from '@components/Button';
import styles from './UserPostListPage.module.scss';

export const UserPostListPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const fetchUserPostListRequest = useAppSelector(
    usersSlice.selectors.getFetchUserPostListRequest,
  );

  useEffect(() => {
    if (id) {
      dispatch(usersSlice.thunks.fetchUserPostListThunk(id));
    }
  }, [id]);

  useEffect(
    () => () => {
      dispatch(usersSlice.actions.userPostListPageClear());
    },
    [],
  );

  const handleBackBtnClk = () => {
    const path = getRoutePath('userList');
    dispatch(appSlice.actions.redirect(path));
  };

  return (
    <div className={styles.wrap}>
      <div>
        <Button onClick={handleBackBtnClk}>back</Button>
      </div>
      {fetchUserPostListRequest.error && (
        <div>fetchUserPostListRequest ERROR!</div>
      )}
      {fetchUserPostListRequest.data && (
        <div className={styles.wrap}>
          <div>
            <strong>userId:</strong> {fetchUserPostListRequest.data.user.id}
          </div>
          <div>
            <strong>user:</strong> {fetchUserPostListRequest.data.user.name}
          </div>
          <div>
            <strong>email:</strong> {fetchUserPostListRequest.data.user.email}
          </div>
          <div>
            <strong>posts:</strong>
          </div>
          <div className={styles.postList}>
            {fetchUserPostListRequest.data.postList.map((post, index) => (
              <PostCard post={post} index={index} key={post.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

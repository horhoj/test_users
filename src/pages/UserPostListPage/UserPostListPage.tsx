import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { usersSlice } from '@store/users';
import { PostCard } from '@components/PostCard';
import styles from './UserPostListPage.module.scss';

export const UserPostListPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const fetchUserPostListRequest = useAppSelector(
    usersSlice.selectors.getFetchUserPostListRequest,
  );

  fetchUserPostListRequest.data;

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

  return (
    fetchUserPostListRequest.data && (
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
    )
  );
};

import { FC } from 'react';
import { Post } from '@entitiesTypes/posts';
import styles from './PostCard.module.scss';

interface PostCardProps {
  post: Post;
  index: number;
}

export const PostCard: FC<PostCardProps> = ({ post, index }) => {
  return (
    <div className={styles.wrap}>
      <div>
        <strong>№ {index}</strong>
      </div>
      <div>
        <strong>userId: </strong>
        {post.userId}
      </div>
      <div>
        <strong>title: </strong>
        {post.title}
      </div>
      <div>
        <strong>body: </strong>
        {post.body}
      </div>
    </div>
  );
};

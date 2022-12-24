import { User } from '@entitiesTypes/users';
import { Post } from '@entitiesTypes/posts';

export interface UserPostListData {
  user: User;
  postList: Post[];
}

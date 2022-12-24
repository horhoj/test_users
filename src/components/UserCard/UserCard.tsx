import { FC } from 'react';
import { User } from '@entitiesTypes/users';
import { Button } from '@components/Button';
import styles from './UserCard.module.scss';

interface UserCardProps {
  index: number;
  user: User;
  onPostsBtnClk: () => void;
  onAlbumsBtnClk: () => void;
}

export const UserCard: FC<UserCardProps> = ({
  user,
  index,
  onPostsBtnClk,
  onAlbumsBtnClk,
}) => {
  return (
    <div className={styles.wrap}>
      <div>
        <strong>№</strong> {index}
      </div>
      <div>
        <strong>id=</strong>
        {user.id}
      </div>
      <div>
        <strong>name:</strong> {user.name}
      </div>
      <div>
        <strong>city:</strong> {user.address.city}
      </div>
      <div>
        <strong>street:</strong> {user.address.street}
      </div>
      <div>
        <strong>suite:</strong> {user.address.suite}
      </div>
      <div>
        <strong>phone:</strong> {user.phone}
      </div>
      <div>
        <strong>email:</strong> {user.email}
      </div>
      <div>
        <strong>website:</strong> {user.website}
      </div>
      <div className={styles.buttonList}>
        <Button onClick={onPostsBtnClk}>posts</Button>
        <Button onClick={onAlbumsBtnClk}>albums</Button>
      </div>
    </div>
  );
};

import { FC } from 'react';
import { Album } from '@entitiesTypes/albums';
import { User } from '@entitiesTypes/users';
import { Button } from '@components/Button';
import styles from './AlbumCardList.module.scss';

interface AlbumCardListProps {
  albumList: Album[];
  user: User;
  onClose: () => void;
}

export const AlbumCardList: FC<AlbumCardListProps> = ({
  albumList,
  user,
  onClose,
}) => {
  return (
    <div className={styles.wrap} onClick={(e) => e.stopPropagation()}>
      <div>
        <Button onClick={onClose}>close</Button>
      </div>
      <div>
        <strong>userId:</strong> {user.id}
      </div>
      <div>
        <strong>userName:</strong> {user.name}
      </div>
      <div>
        <strong>albums: </strong>
      </div>
      {albumList.map((album) => (
        <div key={album.id} className={styles.albumItemWrap}>
          <div>
            <strong>albumId: </strong>
            {album.id}
          </div>
          <div>
            <strong>albumUserId: </strong>
            {album.userId}
          </div>
          <div>
            <strong>albumTitle: </strong>
            {album.title}
          </div>
        </div>
      ))}
    </div>
  );
};

import React, { FC } from 'react';

import { useAppSelector } from '@store/hooks';
import { usersSlice } from '@store/users';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const usersSliceIsLoading = useAppSelector(usersSlice.selectors.getIsLoading);

  const isLoading = usersSliceIsLoading;

  return isLoading ? <div className={styles.Spinner} /> : null;
};

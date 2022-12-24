import React, { FC } from 'react';

import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
  const postsSliceIsLoading = false;

  const isLoading = postsSliceIsLoading;

  return isLoading ? <div className={styles.Spinner} /> : null;
};

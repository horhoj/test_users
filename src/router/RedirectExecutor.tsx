import { appSlice } from '@store/app';
import { useAppSelector } from '@store/hooks';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const RedirectExecutor: React.FC = () => {
  const redirectUrl = useAppSelector(appSlice.selectors.getRedirectUrl);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectUrl) {
      navigate(redirectUrl.path);
    }
  }, [redirectUrl]);

  return null;
};

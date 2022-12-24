import { Page404 } from '@pages/Error404Page';
import { FC } from 'react';
import { UserListPage } from '@pages/UserListPage';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = ['userList', 'error404'] as const;

export type RouteNameList = typeof routeNameList[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  userList: {
    path: '/users',
    component: UserListPage,
  },

  error404: {
    path: '*',
    component: Page404,
  },
};

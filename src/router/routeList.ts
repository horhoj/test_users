import { Page404 } from '@pages/Error404Page';
import { FC } from 'react';
import { UserListPage } from '@pages/UserListPage';
import { UserPostListPage } from '@pages/UserPostListPage';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = ['userList', 'userPostList', 'error404'] as const;

export type RouteNameList = typeof routeNameList[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  userList: {
    path: '/users',
    component: UserListPage,
  },

  userPostList: {
    path: '/posts/:id',
    component: UserPostListPage,
  },

  error404: {
    path: '*',
    component: Page404,
  },
};

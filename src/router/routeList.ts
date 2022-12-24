import { Page404 } from '@pages/Error404Page';
import { MainPage } from '@pages/MainPage';
import { FC } from 'react';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = ['main', 'error404'] as const;

export type RouteNameList = typeof routeNameList[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  main: {
    path: '/main',
    component: MainPage,
  },
  error404: {
    path: '*',
    component: Page404,
  },
};

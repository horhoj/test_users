import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getUUID } from '@utils/getUUID';
import { routeList, routeNameList } from './routeList';
import { getRoutePath } from './helpers';
import { RedirectExecutor } from './RedirectExecutor';

export const Router: FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={getRoutePath('main')} />}
          key={getUUID()}
        />
        {routeNameList.map((routeName) => {
          const route = routeList[routeName];
          return (
            <Route
              path={route.path}
              key={routeName}
              element={<route.component />}
            />
          );
        })}
      </Routes>
      <RedirectExecutor />
    </>
  );
};

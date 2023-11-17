import { PathRouteProps } from 'react-router-dom';
import { Login } from '../pages';

export const routes: PathRouteProps[] = [
  {
    path: '/',
    element: <div />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import Directors from './pages/Directors';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <><NavBar /><Home /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/directors',
    element: <><NavBar /><Directors /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/actors',
    element: <><NavBar /><Actors /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/movie/:id',
    element: <><NavBar /><Movie /></>,
    errorElement: <ErrorPage />,
  },
]);
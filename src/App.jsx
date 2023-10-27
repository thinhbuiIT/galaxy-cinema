import { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const MainLayout = lazy(() => import('./Layout/MainLayout/MainLayout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Showtimes = lazy(() => import('./pages/Showtimes/Showtimes'));
const Film = lazy(() => import('./pages/Film/Film'));
const DetailFilm = lazy(() => import('./pages/DetailFilm/DetailFilm'));
const Cinema = lazy(() => import('./pages/Cinema/Cinema'));
const Booking = lazy(() => import('./pages/Booking/Booking'));
const Loading = lazy(() => import('./pages/Loading/Loading'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const router = createBrowserRouter([
  {
    element:
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/lich-chieu',
        element: <Showtimes />
      },
      {
        path: 'all-film',
        element: <Film />
      },
      { 
        path: 'detail/:slug',
        element: <DetailFilm />
      },
      { 
        path: 'rap-gia-ve/:slug',
        element: <Cinema />
      },
      { 
        path: 'booking',
        element: <Booking />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'APP_STARTUP' })
  }, [])

  return <RouterProvider router={router} />
}

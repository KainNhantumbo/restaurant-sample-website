import { JSX, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader';

type RouteType = { path: string; element: JSX.ElementType };

const Home = lazy(() => import('./routes/Home'));
const NotFoundError = lazy(() => import('./routes/404'));
const PrivacyPolicy = lazy(() => import('./routes/PrivacyPolicy'));

const routes: RouteType[] = [
  { path: '/', element: Home },
  { path: '/docs/privacy-policy', element: PrivacyPolicy },
  { path: '*', element: NotFoundError }
];

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            <Suspense fallback={<Loader />}>
              <route.element />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}

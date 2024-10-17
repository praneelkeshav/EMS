import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/login',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/dashboard',
        element: lazy(() => import('./views/dashboard'))
      },
      {
        exact: 'true',
        path: '/monitor/builidingoverview',
        element: lazy(() => import('./views/ui-elements/basic/BasicButton'))
      },
      {
        exact: 'true',
        path: '/monitor/client',
        element: lazy(() => import('./views/Monitor/pages/client'))
      },
      {
        exact: 'true',
        path: '/controls/battery',
        element: lazy(() => import('./views/controls/batterycontrols'))
        
      },
      {
        exact: 'true',
        path: '/monitor/ev',
        element: lazy(() => import('./views/Monitor/pages/ev'))
      },
      {
        exact: 'true',
        path: '/controls/thermal',
        element: lazy(() => import('./views/controls/thermalcontrols'))
      },
      {
        exact: 'true',
        path: '/optimize/peakanalysis',
        element: lazy(() => import('./views/Optimize/peakanalysis/index'))
      },
      {
        exact: 'true',
        path: '/monitor/buildingoverview',
        element: lazy(() => import('./views/Monitor/pages/overview'))
      },
      {
        exact: 'true',
        path: '/monitor/cooling',
        element: lazy(() => import('./views/Monitor/pages/cooling'))
      },
      {
        exact: 'true',
        path: '/monitor/renewable',
        element: lazy(() => import('./views/Monitor/pages/renewables'))
      },
      {
        exact: 'true',
        path: '/monitor/energystorage',
        element: lazy(() => import('./views/Monitor/pages/energystorage'))
      },
      {
        exact: 'true',
        path: '/optimize/kvavskw',
        element: lazy(() => import('./views/Optimize/kva/kvsvskw'))
      },
      {
        exact: 'true',
        path: '/monthlyreports',
        element: lazy(() => import('./views/monthlyreports/monthlyreports'))
      },
      {
        exact: 'true',
        path: '/alerts',
        element: lazy(() => import('./views/alerts/alerts'))
      },
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default routes;

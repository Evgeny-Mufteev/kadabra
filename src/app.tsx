import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute } from './const/const';
import Layout from './components/commons/layouts';
import browserHistory from './providers/history-route/browser-history';
import ScrollToTop from './utils/scroll-top';
import { HistoryRouter } from './providers/history-route';

const MainPage = lazy(() => import('./pages/main/main'));
const ModelsPage = lazy(() => import('./pages/model/model'));
const ModificationsPage = lazy(() => import('./pages/modification/modification'));
const DevicePage = lazy(() => import('./pages/device/device'));
const NotFoundPage = lazy(() => import('./pages/not-found/not-found'));

const App = (): JSX.Element => (
  <HelmetProvider>
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main} element={
          <Layout >
            <Suspense fallback={<div>Loading...</div>}>
              <MainPage />
            </Suspense>
          </Layout>
        }
        />
        <Route path={AppRoute.Models} element={
          <Layout >
            <Suspense fallback={<div>Loading...</div>}>
              <ModelsPage />
            </Suspense>
          </Layout>
        }
        />
        <Route path={AppRoute.Modifications} element={
          <Layout >
            <Suspense fallback={<div>Loading...</div>}>
              <ModificationsPage />
            </Suspense>
          </Layout>
        }
        />
        <Route path={AppRoute.Device} element={
          <Layout >
            <Suspense fallback={<div>Loading...</div>}>
              <DevicePage />
            </Suspense>
          </Layout>
        }
        />
        <Route path={AppRoute.NotFound} element={
          <Layout >
            <Suspense fallback={<div>Loading...</div>}>
              <NotFoundPage />
            </Suspense>
          </Layout>
        }
        />
      </Routes>
    </HistoryRouter>
  </HelmetProvider>
);

export default App;

import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './components/layout';
const DummyTable = lazy(() => import('./pages/dummyTable'));
const DummyChart = lazy(() => import('./pages/dummyChart'));
const DummyList = lazy(() => import('./pages/dummyList'));
const ErrorPage = lazy(() => import('./pages/errorPage'));

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="/dummyChart" />} />
            <Route path="/dummyChart" element={<DummyChart />} />
            <Route path="/dummyTable" element={<DummyTable />} />
            <Route path="/dummyList" element={<DummyList />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

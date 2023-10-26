import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './components/layout';
import DummyTable from './pages/dummyTable';
import DummyChart from './pages/dummyChart';
import DummyList from './pages/dummyList';
import ErrorPage from './pages/errorPage';

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="/dummyChart" />} />
            <Route path="/dummyChart" element={<DummyChart />} />
            <Route path="/DummyTable" element={<DummyTable />} />
            <Route path="/dummyList" element={<DummyList />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

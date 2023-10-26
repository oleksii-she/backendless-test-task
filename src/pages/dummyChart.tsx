import { Navigate } from 'react-router-dom';
import DummyComponent from '../components/dummyComponent';
import tabs from '../tabs.json';

const DummyChart = () => {
  const table = tabs.find((el) => el.id === 'dummyChart');

  if (!table) {
    return <Navigate to="/*" />;
  }
  return (
    <section className="section">
      <div className="container">
        <DummyComponent table={table} />
      </div>
    </section>
  );
};

export default DummyChart;

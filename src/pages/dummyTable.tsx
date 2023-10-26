import { Navigate } from 'react-router-dom';
import DummyComponent from '../components/dummyComponent';
import tabs from '../tabs.json';

const DummyTable = () => {
  const table = tabs.find((el) => el.id === 'dummyTable');

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

export default DummyTable;

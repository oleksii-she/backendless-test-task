import { Navigate } from 'react-router-dom';
import { Table } from '../types/types';

const DummyComponent = ({ table }: { table: Table }) => {
  if (!table) {
    return <Navigate to="/*" />;
  }

  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>id</th>
          <th>title</th>
          <th>order</th>
          <th>path</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{table.id}</td>
          <td>{table.title}</td>
          <td>{table.order}</td>
          <td>{table.path}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DummyComponent;

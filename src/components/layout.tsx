import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <div className="container section">
            <p>Loading...</p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

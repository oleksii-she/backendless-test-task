import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
export const SharedLayout = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

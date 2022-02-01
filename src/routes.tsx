import { Route, Routes } from 'react-router-dom';
import ApplicationListPage from './pages/ApplicationListPage';
import DetailsPage from './pages/DetailsPage';
import PaymentsTable from './pages/details/PaymentsTable';
import TestPage from './pages/TestPage';
import React from 'react';
import Content from './pages/details/Content';

export const basePath = import.meta.env.BASE_URL || '/';

export const soknadPath = (soknadId: string) => `${basePath}soknad/${soknadId}`;

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`${basePath}`} element={<ApplicationListPage />} />
      <Route path={`${basePath}soknad/:id/*`} element={<DetailsPage />}>
        <Route path={`payment/:weekNumber`} element={<PaymentsTable />} />
        <Route path={`*`} element={<Content />} />
      </Route>
      <Route path={'/test'} element={<TestPage />} />
    </Routes>
  );
};

export default AppRoutes;

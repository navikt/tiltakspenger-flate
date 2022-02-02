import { Route, Routes } from 'react-router-dom';
import ApplicationListPage from './pages/soknadList/ApplicationListPage';
import DetailsPage from './pages/DetailsPage';
import PaymentsTable from './pages/person/PaymentsTable';
import TestPage from './pages/TestPage';
import React from 'react';
import Content from './pages/person/Content';

export const basePath = import.meta.env.BASE_URL || '/';

export const soknadPath = (soknadId: string) => `${basePath}soknad/${soknadId}`;
export const personPath = ({
  fnr,
  soknadId,
}: {
  fnr: string;
  soknadId: string;
}) => `${basePath}person/${fnr}/soknad/${soknadId}`;

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`${basePath}`} element={<ApplicationListPage />} />
      <Route path={`${basePath}person/:fnr/*`} element={<DetailsPage />}>
        <Route path={`payment/:paymentId`} element={<PaymentsTable />} />
        <Route path={`soknad/:soknadId`} element={<Content />} />
        <Route path={`*`} element={<Content />} />
      </Route>
      <Route path={'/test'} element={<TestPage />} />
    </Routes>
  );
};

export default AppRoutes;

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

export const paths = {
  ApplicationPage: `${basePath}`,
  DetailsPage: `${basePath}person/:fnr/*`,
  PaymentsTable: 'payment/:paymentId',
  Content: 'soknad/:soknadId',
  DetailsFallback: '*',
  Test: '/test',
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.ApplicationPage} element={<ApplicationListPage />} />
      <Route path={paths.DetailsPage} element={<DetailsPage />}>
        <Route path={paths.PaymentsTable} element={<PaymentsTable />} />
        <Route path={paths.Content} element={<Content />} />
        <Route path={paths.DetailsFallback} element={<Content />} />
      </Route>
      <Route path={paths.Test} element={<TestPage />} />
    </Routes>
  );
};

export default AppRoutes;

import { Route, Routes } from 'react-router-dom';
import ApplicationListPage from './pages/soknadList/ApplicationListPage';
import PersonPage from './pages/PersonPage';
import PaymentsTable from './pages/person/PaymentsTable';
import TestPage from './pages/TestPage';
import React from 'react';
import PersonInfo from './pages/person/PersonInfo';
import EmptyPage from './pages/EmptyPage';

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
  PersonPage: `${basePath}person/:fnr/*`,
  PaymentsTable: 'payment/:paymentId',
  Content: 'soknad/:soknadId',
  PersonFallback: '*',
  Empty: '',
  Test: '/test',
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.ApplicationPage} element={<ApplicationListPage />} />
      <Route path={paths.PersonPage} element={<PersonPage />}>
        <Route path={paths.PaymentsTable} element={<PaymentsTable />} />
        <Route path={paths.Content} element={<PersonInfo />} />
        <Route path={paths.PersonFallback} element={<PersonInfo />} />
      </Route>
      <Route path={paths.Empty} element={<EmptyPage />} />
      <Route path={paths.Test} element={<TestPage />} />l
    </Routes>
  );
};

export default AppRoutes;

import React from 'react';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationListPage from './pages/ApplicationListPage';
import DetailsPage from './pages/DetailsPage';
import Header1 from './components/Header';
import TestPage from './pages/TestPage';
import CentreContent from './pages/details/RequirementChecks';
import PaymentsTable from './pages/details/PaymentsTable';

function App() {
  return (
    <Router>
      <div className="App">
        <Header1 />
        <Routes>
          <Route path={'/'} element={<ApplicationListPage />} />
          <Route path={'/soknad/:id/*'} element={<DetailsPage />}>
            <Route path="payment/:weekNumber" element={<PaymentsTable />} />
            <Route path={'*'} element={<CentreContent />} />
          </Route>
          <Route path={'/test'} element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

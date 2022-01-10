import React from 'react';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ApplicationListPage from './pages/ApplicationListPage';
import DetailsPage from './pages/DetailsPage';
import Navbar from './components/Navbar';
import TestPage from './pages/TestPage';
import CentreContent from './pages/details/RequirementChecks';
import PaymentsTable from './pages/details/PaymentsTable';
import InfoMessage from './components/InfoMessage';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <RecoilRoot>
        <div className="App">
          <Navbar />
          <InfoMessage />
          <AppRoutes />
        </div>
      </RecoilRoot>
    </Router>
  );
}

export default App;

import React from 'react';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import './App.css';
import { Dropdown, Header } from '@navikt/ds-react-internal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationListPage from './pages/ApplicationListPage';
import DetailsPage from './pages/DetailsPage';
import Header1 from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header1 />
        <Routes>
          <Route path={'/'} element={<ApplicationListPage />} />
          <Route path={'/DetailsPage'} element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

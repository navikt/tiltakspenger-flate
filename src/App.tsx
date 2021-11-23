import React from 'react';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import './App.css';
import { Header } from '@navikt/ds-react-internal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationListPage from './pages/ApplicationListPage';
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <Header.Title href="/#home">NAV TPTS</Header.Title>
          <Header.User name="Kong Harald" style={{ marginLeft: 'auto' }} />
        </Header>
        <Routes>
          <Route path={'/'} element={<ApplicationListPage />} />
          <Route path={'/DetailsPage'} element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Navbar from './components/Navbar';
import InfoMessage from './components/InfoMessage';
import AppRoutes from './routes';
import { mockHttp } from './mocks/browser';

if (import.meta.env.MODE === 'mock') {
  mockHttp();
}

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

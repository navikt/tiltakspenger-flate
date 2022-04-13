import React, { FC, ReactNode } from 'react';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot, RecoilRootProps } from 'recoil';
import Navbar from './components/Navbar';
import InfoMessage from './components/InfoMessage';
import AppRoutes from './routes';
import { mockHttp } from './mocks/browser';

const FixedTypeRecoilRoot = RecoilRoot as unknown as FC<
  RecoilRootProps & { children: ReactNode }
>;

if (import.meta.env.MODE === 'mock') {
  mockHttp();
}

const App = () => {
  return (
    <Router>
      <FixedTypeRecoilRoot>
        <div className="App">
          <Navbar />
          <InfoMessage />
          <AppRoutes />
        </div>
      </FixedTypeRecoilRoot>
    </Router>
  );
};

export default App;

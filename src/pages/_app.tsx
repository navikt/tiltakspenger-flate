import React from 'react';
import '../../styles/globals.css';
import { NextWebVitalsMetric } from 'next/app';
import 'antd/dist/antd.css';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Navbar from '../components/Navbar';
import InfoMessage from '../components/InfoMessage';
import logger from '../server/logger';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (process.env.NODE_ENV === "development") {
    logger.info(metric);
  }
  // Reporting results to analytics can be done here
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Navbar />
      <InfoMessage />
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default App;

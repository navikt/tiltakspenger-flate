import React from 'react';
import '../../styles/globals.css';
import 'antd/dist/antd.css';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Navbar from '../components/Navbar';
import InfoMessage from '../components/InfoMessage';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks');
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

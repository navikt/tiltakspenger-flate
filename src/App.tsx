import React from 'react';
import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import './App.css';
import { Header } from '@navikt/ds-react-internal';

function App() {
  return (
    <div className="App">
      <Header>
        <Header.Title href="/#home">NAV TPTS</Header.Title>
        <Header.User name="Kong Harald" style={{ marginLeft: 'auto' }} />
      </Header>
    </div>
  );
}

export default App;

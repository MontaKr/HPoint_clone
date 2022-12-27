import RootRouter from './routes';
import { Reset } from 'styled-reset'
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Reset/>
      <div className="App">
        <RootRouter/>
      </div>
    </React.Fragment>
  );
}

export default App;
import React from 'react';
import './App.css';

import { Sum } from './Sum';
import { One } from './One';
import { Two } from './Two';
import { Three } from './Three';
import { Nine } from './Nine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Sum>
              <Two />
              <Two />
              <Nine />
              <One />
              <Three />
          </Sum>
      </header>

    </div>
  );
}

export default App;

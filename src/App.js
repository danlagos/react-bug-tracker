import React from 'react';
import './App.css';

import Tickets from './Tickets/Tickets.js';

function App() {
  return (
    <div className="App">
      <h1>React CRM</h1>
      <Tickets user="Daniel" />
      

    </div>
  );
}

export default App;

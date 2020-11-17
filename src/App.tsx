import React from 'react';
import './App.css';

// Container imports
import { Autocomplete } from './containers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Autocomplete API</h3>
        <p>
          Enter a search term and click "Search" to query the API
        </p>
      </header>
      <Autocomplete />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import styled from 'styled-components';

// Container imports
import { Autocomplete } from './containers';

function App() {
  return (
    <Wrapper className="App">
      <Header className="App-header">
        <h3>Autocomplete API</h3>
        <p>
          Enter a search term and click "Search" to query the API
        </p>
      </Header>
      <Autocomplete />
    </Wrapper>
  );
}

const Wrapper = styled(`div`)`

`;

const Header = styled(`header`)`

`;

export default App;

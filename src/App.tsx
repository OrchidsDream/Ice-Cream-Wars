import React from 'react';

import './App.css';
import Header from './Components/header';
import Votes from './Components/Votes';
import AdDesigner from './Components/AdDesigner';

function App() {
  return (
    <div className="App">
      <Header/>
      <AdDesigner/>
      <Votes />
    </div>
  );
}

export default App;

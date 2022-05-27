import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Votes from './Votes';
import AdDesigner from './AdDesigner';

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

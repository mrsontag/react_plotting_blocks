import React from 'react';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Subcontent from "./components/Subcontent";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main>
        <Subcontent />
        <Subcontent />
        <Subcontent />
      </Main>
    </div>
  );
}

export default App;

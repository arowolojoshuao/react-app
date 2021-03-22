import React from 'react';
import './App.css';
import CounterList from './components/counterList';
import NavBar from './components/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <CounterList />
    </React.Fragment>
  );
}

export default App;
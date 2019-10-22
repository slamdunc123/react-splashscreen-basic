import React from 'react';
import logo from './logo.svg';
import './App.scss';

import 'animate.css/animate.css'

// router
import { BrowserRouter as Router } from 'react-router-dom';


// views
// import SplashScreen from './components/views/SplashScreen';
import Main from './components/layout/Main';

function App() {
  return (
    <Router basename={'/'}>
      <div className='App'>
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* <SplashScreen /> */}
        <Main/>
      </div>
    </Router>
  );
}

export default App;

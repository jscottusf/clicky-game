import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Clicky from './pages/Clicky';
import Info from './pages/Info';
import './App.css';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Route exact path="/" component={Info} />
        <Route exact path="/clicky" component={Clicky} />
      </div>
    </Router>
  );
}

export default App;

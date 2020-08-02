import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" component={Example}></Route>
        <Route path="/" component={LandingPage}></Route>
        
      </Router>
    </div>
  );
}

export default App;

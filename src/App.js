import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import ExDate from 'pages/Example_Number';
import ExNumber from 'pages/Example_Date';
import ExBreadcrum from 'pages/Example_breadcrumb';

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/date" component={ExDate}></Route>
      <Route path="/number" component={ExNumber}></Route>
      <Route path="/breadcrumb" component={ExBreadcrum}></Route>
        <Route path="/" component={LandingPage}></Route>
        
      </Router>
    </div>
  );
}

export default App;

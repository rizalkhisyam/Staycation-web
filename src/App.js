import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/ChekoutPage';
import { ToastContainer } from 'react-toastify';

import ExDate from 'pages/Example_Number';
import ExNumber from 'pages/Example_Date';
import ExBreadcrumb from 'pages/Example_breadcrumb';

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>

        {/* example */}
        <Route path="/date" component={ExDate}></Route>
        <Route path="/number" component={ExNumber}></Route>
        <Route path="/breadcrumb" component={ExBreadcrumb}></Route>
        <Route path="/checkout" component={Checkout}></Route>

        {/* core */}
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        
      </Router>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Signup from "./Signup";
const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>
);

export default App;

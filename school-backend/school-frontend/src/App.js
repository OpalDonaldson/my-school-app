import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import FileNotFound from './components/FileNotFound';
const jwt = require('jsonwebtoken');

const checkAuth = () =>{
  let token = localStorage.getItem('token');
  return jwt.verify(token, '4mm0n1qu3!', (err, data)=>{
    if(err){
     return false; 
    }else if(data){
      return true
    }
  });  
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" render={ () =>(
          checkAuth() ? (
            <Redirect to="/dashboard" />
          ) : (
            <SignIn/>
          )
        )} />
        <Route path="/signup" render={ () =>(
          checkAuth() ? (
            <Redirect to="/dashboard" />
          ) : (
            <SignUp />
          )
        )} />
        <Route path="/resetpassword" component={ResetPassword} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path='/*' component={FileNotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;

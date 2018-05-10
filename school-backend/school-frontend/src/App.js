import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Resetpassword from './components/Resetpassword';
import Dashboard from './components/Dashboard';
import Filenotfound from './components/Filenotfound';

const checkAuth = () =>{
  let token = localStorage.getItem('token');
  if(token){
    return true;
  }
  else{
    return false;
  }
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
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/resetpassword" component={Resetpassword} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path='/*' component={Filenotfound} />
      </Switch>
    </div>
  </Router>
);

export default App;

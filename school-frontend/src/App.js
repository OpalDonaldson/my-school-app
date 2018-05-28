import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard';
import Overview from './components/Overview';
import DataDetails from './components/Data&details';
import AllActivities from './components/AllActivities';
import ResourceArea from './components/ResourceArea';
import FileNotFound from './components/FileNotFound';


const checkAuth = () =>{
  let token = localStorage.getItem('token');
  if(token){
    return true; 
  }else {
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
        <Route path="/signin" render={ (props) =>(
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
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/dashboard/overview" component={Overview} />
        <PrivateRoute exact path="/dashboard/datadetails" component={DataDetails} />
        <PrivateRoute exact path="/dashboard/allactivities" component={AllActivities} />
        <PrivateRoute exact path="/dashboard/resourcearea" component={ResourceArea} />
        <Route component={FileNotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;

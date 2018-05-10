import React, { Component } from 'react';
import Navigator from '../partials/Navigator';

class Dashboard extends Component {

  render(){
    return(
      <main>
        <Navigator header='Dashboard'/>
        <h1>Protected Dashboard</h1>
        <p>{console.log(localStorage)}</p>
      </main>
    )
  }

}
export default Dashboard;

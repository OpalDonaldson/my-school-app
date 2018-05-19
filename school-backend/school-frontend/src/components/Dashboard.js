import React, { Component } from 'react';
import Navigator from '../partials/Navigator';

class Dashboard extends Component {
  
  
  componentDidMount(){
    let timer = setInterval(()=>{
      localStorage.removeItem("token");
      clearInterval(timer);
      window.location.reload(true);
    }, 500000);   
  }
  
  render(){
    return(
      <main>
        <Navigator header='Dashboard'/>
        <h1>Protected Dashboard</h1>
        <p>Congratulations you've logged in!</p>
      </main>
    )
  }

}
export default Dashboard;

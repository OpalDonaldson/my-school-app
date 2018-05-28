import React, { Component } from 'react';
import Navigator from '../partials/Navigator';

class Dashboard extends Component {
 
  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token){
      (function getData(){
        const url = 'http://localhost:8080/dashboard';    
        fetch(url, {
          method: "GET",
          credentials: 'same-origin',
          mode: 'cors',
          headers: new Headers({
            'Authorization': `Bearer ${token}`
          })      
        }).then((response)=>{
         return response;
        }).then((data)=>{
          console.log(data)
        })
      })();
    }
    else{
      window.location = "/signin";
    }     
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

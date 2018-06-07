import React, { Component } from 'react';
import Navigator from '../partials/Navigator';
import Dashboardnavbar from '../partials/Dashboardnavbar';
import Footer from "../partials/Footer";

import "../css/dashboard.css"
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
      <main id='dashboard'>
        <Navigator header='Dashboard'/>
        <section id='dashboard-overview-nav'>
          <Dashboardnavbar />
        </section>
        <Footer footer="School App" />
        
      </main>
    )
  }

}
export default Dashboard;

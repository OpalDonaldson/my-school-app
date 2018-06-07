import React, { Component } from 'react';

class Dashboardnavbar extends Component {
   render(){
    return(
      <section id='dashboard-navigator'>
        <div>
          <img id='user-avatar' href=""/>
        </div>
        <ul id='dashboard-list'>
          <li><i className='fas fa-globe'></i>  Overview</li>
          <li><i className='fas fa-chart-pie'></i>  Data & Details</li>
          <li><i className='fas fa-bell'></i>  All Activities</li>
          <li><i className='fas fa-book'></i>  Resource Area</li>
        </ul>
      </section>
    )
  }
}
export default Dashboardnavbar;

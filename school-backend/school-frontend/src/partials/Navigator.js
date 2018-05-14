import React, { Component } from 'react';

class Navigator extends Component {
  
  render(){
    return(
      <nav id="main-nav-bar">
        <h4>{this.props.header}</h4>
        <ul id="home-dashboard">
          <a id="home" href="/"><li>Home</li></a>
          <a id="dashboard" href="/dashboard"><li>Dashboard</li></a>
        </ul>
        <ul id="log-info">
          <a id="/signin" href="/signin"><li><i className="fas fa-sign-in-alt"></i></li></a>
          <a id="/signup" href="/signup"><li><i className="fas fa-user-plus"></i></li></a>
        </ul>
      </nav>
    )
  }
}

export default Navigator;

import React, { Component } from 'react';

class Navigator extends Component {

  render(){
    return(
      <nav id="main-nav-bar">
        <h4>{this.props.header}</h4>
        <ul id="home-dashboard">
          <a href="/"><li>Home</li></a>
          <a><li>Dashboard</li></a>
        </ul>
        <ul id="log-info">
          <a><li><i class="fas fa-sign-in-alt"></i> Sign-in</li></a>
          <a><li><i class="fas fa-sign-out-alt"></i> Sign-out</li></a>
        </ul>
      </nav>
    )
  }
}

export default Navigator;

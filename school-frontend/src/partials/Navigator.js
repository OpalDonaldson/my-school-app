import React, { Component } from 'react';

class Navigator extends Component {

  render(){
    return(
      <nav id="main-nav-bar">
        <h4>{this.props.header}</h4>
        <ul id="home-dashboard">
          <a id="home" href="/"><li>Home</li></a>
          <a id="dashboard" href="/"><li>Dashboard</li></a>
        </ul>
        <ul id="log-info">
          <a id="/signin" href="/signin"><li><i class="fas fa-sign-in-alt"></i> Sign-in</li></a>
          <a id="/signup" href="/signup"><li><i class="fas fa-user-plus"></i> Sign-up</li></a>
        </ul>
      </nav>
    )
  }
}

export default Navigator;

import React, { Component } from 'react';

class Navigator extends Component {

  render(){
    return(
      <nav id="main-nav-bar">
        <h4>{this.props.header}</h4>
        <ul>
          <li>Home</li>
          <li>Dashboard</li>
          <li>Login</li>
          <li>Logout</li>
        </ul>
      </nav>

    )
  }
}

export default Navigator;

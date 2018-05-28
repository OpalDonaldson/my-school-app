import React, { Component } from 'react';

function Greeting(props) {
  let token = localStorage.getItem('token');
  let navigateToSignin = ()=>{
    window.location = '/signin';
   }
   let navigateToSignup = ()=>{
    window.location = '/signup';
   }
   let signout = ()=>{
    localStorage.removeItem("token");
    window.location = '/signin'
   }
  if (token) {
    return (
    <div id="log-info">
      <button onClick={signout} id="/signout"><i className="fas fa-sign-out-alt"></i></button>
      <button id="/setting"><i className="fas fa-cog"></i></button>
    </div>
    );
  }else{
    return(
      <div id="log-info">
        <button onClick={navigateToSignin} id="/signin"><i className="fas fa-sign-in-alt"></i></button>
        <button onClick={navigateToSignup} id="/signup"><i className="fas fa-user-plus"></i></button>
      </div>
    );
  }  
}

class Navigator extends Component {
  
  render(){
    return(
      <nav id="main-nav-bar">
        <h4>{this.props.header}</h4>
        <ul id="home-dashboard">
          <a id="home" href="/"><li>Home</li></a>
          <a id="dashboard" href="/dashboard"><li>Dashboard</li></a>
        </ul>
        <Greeting />
      </nav>
    )
  }
}

export default Navigator;

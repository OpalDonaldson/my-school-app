import React, { Component } from 'react';
import Navigator from './partials/Navigator';
import  "./css/signin.css";

class Signin extends Component {

  render(){
    return(
      <main>
        <Navigator header="Sign in" />
        <article id="sign-in">
          <p>Here</p>

        </article>
      </main>
    )
  }
}

export default Signin;

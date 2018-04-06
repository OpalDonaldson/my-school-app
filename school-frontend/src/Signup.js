import React, { Component } from 'react';
import Navigator from "./partials/Navigator";

class Signup extends Component {


  render(){
    return(
      <main>
        <Navigator header="Sign up"/>
        <article>
          <form>
            <label>Firstname
              <input />
            </label>
          </form>
        </article>
      </main>
    )
  }
}

export default Signup;

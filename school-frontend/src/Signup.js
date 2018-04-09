import React, { Component } from 'react';
import Navigator from "./partials/Navigator";
import Footer from "./partials/Footer";
import "./css/signup.css";

class Signup extends Component {


  render(){
    return(
      <main id="main-register">
        <Navigator header="Register"/>
        <article id="register-article">
          <h3>Register here to use my great app.</h3>
          <form action="" id="register-form">

              <label>Firstname
                <input id="firstname" type="text" placeholder="John" required />
              </label>
              <label>Lastname
                <input id="lastname" type="text" placeholder="Rick" equired />
              </label>
              <label>Email
                <input id="email" type="email"
                pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                placeholder="name@domain.com" required/>
              </label>
              <label>Telephone
                <input id="telephone" type="telephone" placeholder="000 000 0000" />
              </label>
              <label>School logo
                <input id="avatar" type="file" />
              </label>
              <label>School Name
                <input id="schoolname" type="text" placeholder="School Name" required />
              </label>
              <label>Street:
                <input id="street" type="text" placeholder="Street" required />
              </label>
              <label>City
                <input id="city" type="text" placeholder="City" required />
              </label>
              <label>Country
                <input id="lastname" type="text" placeholder="Country" required />
              </label>
              <label>Password
                <input id="password" type="password" required />
              </label>
              <input id="submit" type="submit" value="Submit" />
          </form>
        </article>
        <Footer footer="APP NAME" />
      </main>
    )
  }
}

export default Signup;

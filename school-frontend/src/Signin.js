import React, { Component } from 'react';
import Navigator from './partials/Navigator';
import Footer from './partials/Footer';
import  "./css/signin.css";

class Signin extends Component {
  constructor(props){
    super(props);

    this.state ={
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    if(event.target.id === "email"){
      this.setState({
        email : event.target.value
      })
    }
    else if(event.target.id === "password"){
      this.setState({
        password : event.target.value
      })
    }

  }
  handleSubmit(){
    const testURL = 'http://localhost:8080/users/login';
	  const myInit = {
    	method: 'post',
      body: JSON.stringify(this.state)
    };

	  const myRequest = new Request(testURL, myInit);

  	fetch(myRequest).then((response) =>
  		response
  	).then((response) =>
  		response
  	).catch((e)=>
  		e
  	);
  }
  render(){
    return(
      <main>
        <Navigator header="Sign in" />
        <article id="sign-article">
          <div id="sigin-in-div">
            <h3 id="login-head">Log in to you School App account.</h3>
            <form onSubmit={this.handleSubmit} id="sigin-in-form">
              <p>Log in</p>
              <div id="email-password">
                <label>Username
                  <input id="email" type="email" placeholder="name@domain.com"
                  required
                  pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                  value={this.state.email} onChange={this.handleChange}/>
                </label>
                <label>Password
                  <input id="password" type="password" onChange={this.handleChange} value={this.state.password}/>
                </label>
              </div>
              <input id="submit" value="Submit" type="submit" />
              <br />
              <a href="/resetpassword">Forget password</a>
            </form>
          </div>
        </article>
        <Footer footer="APP NAME" />
      </main>
    )
  }
}
/*<a>Forgot Password</a>
<a href="/signup">Sign up</a>*/
export default Signin;

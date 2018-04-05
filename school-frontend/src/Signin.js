import React, { Component } from 'react';
import Navigator from './partials/Navigator';
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
  handleSubmit(e){
    e.preventDefault();
    const testURL = 'http://localhost:8080/login';
	  const myInit = {
    	method: 'POST',
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
        <article id="sign-in">
          <h3>Log in to you School App account.</h3>
          <form>
            <div id="email-password">
              <label>Username
              <input id="email" type="email" placeholder="name@example.com"
              required
              pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
              value={this.state.email} onChange={this.handleChange}/>
              </label>
              <label>Password
              <input id="password" type="password" />
              </label>
            </div>
            <input value="Submit" type="submit" />
          </form>
          <a>Forgot Password</a>
          <a href="/signup">Sign up</a>
        </article>
      </main>
    )
  }
}

export default Signin;

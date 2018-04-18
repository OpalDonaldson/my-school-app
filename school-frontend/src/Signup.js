import React, { Component } from 'react';
import Navigator from "./partials/Navigator";
import Footer from "./partials/Footer";
import "./css/signup.css";

class Signup extends Component {
  constructor(props){
    super(props);

    this.state ={
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
      schoolname: "",
      street: "",
      city: "",
      country: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    if(event.target.id === "firstname"){
      this.setState({
        firstname: event.target.value
      });
    }
    else if(event.target.id === "lastname"){
      this.setState({
        lastname: event.target.value
      });
    }
    else if(event.target.id === "email"){
      this.setState({
        email: event.target.value
      });
    }
    else if(event.target.id === "telephone"){
      this.setState({
        telephone: event.target.value
      });
    }
    else if(event.target.id === "schoolname"){
      this.setState({
        schoolname: event.target.value
      });
    }
    else if(event.target.id === "street"){
      this.setState({
        street: event.target.value
      });
    }
    else if(event.target.id === "city"){
      this.setState({
        city: event.target.value
      });
    }
    else if(event.target.id === "country"){
      this.setState({
        country: event.target.value
      });
    }
    else if(event.target.id === "password"){
      this.setState({
        password: event.target.value
      });
    }
  }
  handleSubmit(){
    const url = 'http://localhost:8080/users/signup';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(this.state)
    })
    .then((data) =>{
      console.log(data)
    })
    .then(error => {
      console.log('Request failed', error);
    });
  }
  render(){
    return(
      <main id="main-register">
        <Navigator header="Register"/>
        <article id="register-article">
          <h3>Register here to use my great app.</h3>
          <form onSubmit={this.handleSubmit} id="register-form">

              <label>Firstname
                <input id="firstname" type="text" placeholder="John" value={this.state.firstname} onChange={this.handleChange} required />
              </label>
              <label>Lastname
                <input id="lastname" type="text" placeholder="Rick" value={this.state.lastname} onChange={this.handleChange} required />
              </label>
              <label>Email
                <input id="email" type="email"
                pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                placeholder="name@domain.com" value={this.state.email} onChange={this.handleChange} required/>
              </label>
              <label>Telephone
                <input id="telephone" type="telephone" placeholder="000 000 0000" value={this.state.telephone} onChange={this.handleChange} />
              </label>
              <label>School Name
                <input id="schoolname" type="text" placeholder="School Name" value={this.state.schoolname} onChange={this.handleChange} required />
              </label>
              <label>Street:
                <input id="street" type="text" placeholder="Street" value={this.state.street} onChange={this.handleChange} required />
              </label>
              <label>City
                <input id="city" type="text" placeholder="City" value={this.state.city} onChange={this.handleChange} required />
              </label>
              <label>Country
                <input id="country" type="text" placeholder="Country" value={this.state.country} onChange={this.handleChange} required />
              </label>
              <label>Password
                <input id="password" type="password" value={this.state.password} onChange={this.handleChange} required />
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

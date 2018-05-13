import React, { Component } from 'react';
import Navigator from "../partials/Navigator";
import Footer from "../partials/Footer";
import "../css/signup.css";

class Signup extends Component {
  constructor(props){
    super(props);

    this.state ={
      firstname: "",
      lastname: "",
      email: "",
      avatar: null,
      telephone: "",
      schoolname: "",
      street: "",
      city: "",
      country: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
  }
  handleFileSelected(event){
   const avatar = event.target.files[0];
   this.setState(()=>({avatar}));
 }
  handleChange(event){
    function titleCase(str) {
      let splitString = str.split(" ");
      let newStr = [];
      splitString.forEach((word)=>{
        let firstLetter = word.slice(0, 1).toUpperCase();
        let ending = word.slice(1).toLowerCase();
        newStr.push(firstLetter + ending);
      });
      return newStr.join(" ");
    }
    if(event.target.id === "firstname"){
      this.setState({
        firstname: titleCase(event.target.value)
      });
    }
    else if(event.target.id === "lastname"){
      this.setState({
        lastname: titleCase(event.target.value)
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
        schoolname: titleCase(event.target.value)
      });
    }
    else if(event.target.id === "street"){
      this.setState({
        street: titleCase(event.target.value)
      });
    }
    else if(event.target.id === "city"){
      this.setState({
        city: titleCase(event.target.value)
      });
    }
    else if(event.target.id === "country"){
      this.setState({
        country: titleCase(event.target.value)
      });
    }
    else if(event.target.id === "password"){
      this.setState({
        password: event.target.value
      });
    }
  }
  handleSubmit(e){
    let data = new FormData();
    let userData = JSON.stringify(this.state);
    data.append("userInfo", userData);
    data.append('avatar', this.state.avatar);

    console.log(data);
    const url = '/users/signup';
    fetch(url, {
      method: 'POST',
      body: data
    })
    .then((data) =>{
      console.log(data.body)
    })
    .then(error => {
      console.log('Request failed', error);
    });
    e.preventDefault();
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
              <label>
                <input name='avatar' id="avatar" accept='image/x-png, image/gif, image/jpeg' onChange={this.handleFileSelected} type="file"/>
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

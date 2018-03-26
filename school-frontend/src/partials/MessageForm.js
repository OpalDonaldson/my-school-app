import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    if(event.target.id === "name"){
      this.setState({
        name : event.target.value
      })
    }
    else if(event.target.id === "email"){

      this.setState({
        email : event.target.value
      })
    }
    else if(event.target.id === "subject"){
      this.setState({
        subject : event.target.value
      })
    }
    else if(event.target.id === "message"){
      this.setState({
        message : event.target.value
      })
    }
  }

  handleSubmit(){
    postData("localhost:8080/submitMessage", this.state)
    .then(data => console.log(data))
    .catch(error => console.error(error))
    function postData(url, data){
      return fetch(url,{
        body: JSON.stringify(data),
        cache: "no-cache",
        credentials: 'same-origin',
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
      })
      .then(response => response.json())
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"> Name:
          <input required id="name" onChange={this.handleChange} value={this.state.name}/>
        </label>
        <label htmlFor="email"> Email:
          <input type="email" required id="email"
          pattern="[a-zA-Z0-9!#$%&amp;'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
          onChange={this.handleChange} value={this.state.email}/>
        </label>
        <label htmlFor="subject"> Subject:
          <input required id="subject" onChange={this.handleChange} value={this.state.subject}/>
        </label>
        <label htmlFor="message"> Message:
          <textarea required id="message" onChange={this.handleChange} value={this.state.message}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default MessageForm

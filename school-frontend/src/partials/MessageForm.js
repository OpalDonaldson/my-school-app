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

  handleSubmit(event){

  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Name:
          <input id="name" onChange={this.handleChange} value={this.state.name}/>
        </label>
        <label> Email:
          <input id="email" onChange={this.handleChange} value={this.state.email}/>
        </label>
        <label> Subject:
          <input id="subject" onChange={this.handleChange} value={this.state.subject}/>
        </label>
        <label> Message:
          <textarea id="message" onChange={this.handleChange} value={this.state.message}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default MessageForm

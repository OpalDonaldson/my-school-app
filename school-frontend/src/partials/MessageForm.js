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

  handleSubmit(e){

    const testURL = 'http://localhost:8080/messageMe';
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
    e.preventDefault();
  }

  render(){
    return(
      <form id="myMessageForm" onSubmit={this.handleSubmit}>
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

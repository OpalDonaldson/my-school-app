import React, { Component } from 'react';
import Navigator from "./partials/Navigator";
let service = [{
  type: "Organizer",
  icon: "icon1",
  desc: "Lorem ipsum information!"
},
{
  type: "Concise",
  icon: "icon2",
  desc: "Lorem ipsum information!"
},
{
  type: "Reliable",
  icon: "icon3",
  desc: "Lorem ipsum information!"
}];


class Home extends Component {

  render(){
    return(
      <div>
        <Navigator header='School App'/>
        <div>
          <span></span>
          <h1>App Name</h1>
          <p>The tagline will be here.</p>
        </div>
        <article>
          <h2>Services</h2>
          
        </article>
      </div>
    )
  }
}

export default Home;

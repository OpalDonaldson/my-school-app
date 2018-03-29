import React, { Component } from 'react';
import Navigator from "./partials/Navigator";
import MessageForm from "./partials/MessageForm";
import "./css/home.css";
class Home extends Component {

  render(){
    return(
      <main>
        <Navigator header='School App'/>
        <div id="app-name">
          <span><i class="fas fa-certificate fa-5x"></i></span>
          <h1>App Name</h1>
          <p>The tagline will be here.</p>
        </div>
        <article>
          <h2>Services</h2>
          <div>
              <div>
                <span>Organizer</span>
                <h3>icon1</h3>
                <p>Lorem ipsum information!</p>
              </div>
              <div>
                <span>Concise</span>
                <h3>icon2</h3>
                <p>Lorem ipsum information!</p>
              </div>
              <div>
                <span>Reliable</span>
                <h3>icon3</h3>
                <p>Lorem ipsum information!</p>
              </div>
          </div>
        </article>
        <article>
          <h3>ABOUT US</h3>
          <p>I am a paragraph. Click on me.</p>
        </article>
        <article>
          <h3>FIND US</h3>
          <div>
            <h4>ADDRESS</h4>
            <p>Lot 806 Tobago Ave., Cornwall Courts, Tobago Ave. St. James</p>
            <h4>OPENING HOURS:</h4>
            <p>Mon - Fri: 9am - 6pm</p>
          </div>
          <MessageForm />
        </article>
      </main>
    )
  }
}

export default Home;

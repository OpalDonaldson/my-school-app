import React, { Component } from 'react';
import Navigator from '../partials/Navigator';
import MessageForm from '../partials/MessageForm';
import Footer from '../partials/Footer';

import "../css/home.css";

class Home extends Component {
  render(){
    return(
      <main>
        <Navigator header='School App'/>
        <div id="app-name">
          <span><i className="fas fa-graduation-cap fa-5x"></i></span>
          <h1>APP NAME</h1>
          <p>THE TAGLINE WILL BE HERE.</p>
        </div>
        <article id="services-div">
          <h2 id="service-head">Services</h2>
          <div id="services-list">
              <div className="service-items">
                <h3>Organizer</h3>
                <span><i className="fas fa-briefcase fa-5x"></i></span>
                <p>Lorem ipsum information!</p>
              </div>
              <div className="service-items">
                <h3>Concise</h3>
                <span><i className="fas fa-chart-pie fa-5x"></i></span>
                <p>Lorem ipsum information! I am a paragraph. Click on me.</p>
              </div>
              <div className="service-items">
                <h3>Reliable</h3>
                <span><i className="fas fa-handshake fa-5x"></i></span>
                <p>Lorem ipsum information!</p>
              </div>
          </div>
        </article>
        <article  id="about-us">
          <h2>ABOUT US</h2>
          <p>I am a paragraph. Click on me.</p>
        </article>
        <article id="find-us">
          <h2>FIND US</h2>
          <div id="address-form">
            <div id="address">
              <h4>ADDRESS</h4>
              <p>Lot 806 Tobago Ave., Cornwall Courts, Tobago Ave. St. James</p>
              <h4>OPENING HOURS:</h4>
              <p>Mon - Fri: 9am - 6pm</p>
            </div>
            <MessageForm />
          </div>
        </article>
        <Footer footer="APP NAME" />
      </main>
    )
  }
}

export default Home;

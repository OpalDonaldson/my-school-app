import React, { Component } from 'react';
import Navigator from '../partials/Navigator';

class Filenotfound extends Component {
  render(){
    return(
        <div>
            <Navigator header="File Not Found!" />
            <h1>File not Found!</h1>
            <p>What are you looking for?</p>
      </div>
    )
  }
}

export default Filenotfound;
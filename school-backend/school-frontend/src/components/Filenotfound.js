import React, { Component } from 'react';
import Navigator from '../partials/Navigator';

class Filenotfound extends Component {
  render(){
    return(
        <div id='filenotfound'>
            <Navigator header="File Not Found!" />
        </div>
    )
  }
}

export default Filenotfound;
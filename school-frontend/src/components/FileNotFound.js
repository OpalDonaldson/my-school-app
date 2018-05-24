import React, { Component } from 'react';
import Navigator from '../partials/Navigator';

class FileNotFound extends Component {
  render(){
    return(
        <div id='filenotfound'>
            <Navigator header="File Not Found!" />
        </div>
    )
  }
}

export default FileNotFound;
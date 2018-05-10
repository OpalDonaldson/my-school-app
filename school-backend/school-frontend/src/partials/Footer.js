import React, { Component } from 'react';

class Footer extends Component {


  render(){
    return(
      <footer>
        <h3>{this.props.footer}</h3>
        <p>DEVELOPED BY RONIQUE RICKETTS - 2018</p>
        <div>
          <a rel="noopener noreferrer" href="https://github.com/RoniqueRicketts" target="_blank"><i className="fab fa-github fa-3x"></i></a>
          <a rel="noopener noreferrer" href="https://www.linkedin.com/in/ronique-ricketts-b112b3114/" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
          <a rel="noopener noreferrer"href="https://twitter.com/RoniqueRicketts" target="_blank"><i className="fab fa-twitter fa-3x"></i></a>
        </div>
      </footer>
    )
  }
}

export default Footer;

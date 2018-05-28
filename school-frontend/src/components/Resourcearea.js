import React, { Component } from 'react';
import Navigator from '../partials/Navigator';

class ResourceArea extends Component {
  
  componentDidMount(){
    const token = localStorage.getItem("token");
    if(token){
      (function getData(){
        const url = 'http://localhost:8080/dashboard/resourcesarea';    
        fetch(url, {
          method: "GET",
          credentials: 'same-origin',
          mode: 'cors',
          headers: new Headers({
            'Authorization': `Bearer ${token}`
          })      
        }).then((response)=>{
         return response;
        }).then((data)=>{
          console.log(data)
        })
      })();
    }
    else{
      window.location = "/signin";
    }
    
    let timer = setInterval(()=>{
      localStorage.removeItem("token");
      clearInterval(timer);
      window.location.reload(true);
    }, 59000);       
  }

  render(){
    return(
        <div id='resourceArea'>
            <Navigator header="Resource Area" />
        </div>
    )
  }
}

export default ResourceArea;
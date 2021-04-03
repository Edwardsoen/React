
import React, {Component} from 'react'; 
import Navbar from './navbar';
import Home from './Home';
import Result from './Result';
import Login from './Login';
import Register from './Register';
import {MDCDialog} from '@material/dialog';
import { Button } from 'bootstrap';



class App extends React.Component{
    constructor(props){
        super(props); 
        this.state = { 
            inputValue: '', 
            loginStatus: false, //TODO: convert to boolean ><<<
            username:'', 
            componentToBeRendered: ""

        }; 
        this.props = props; 
        this.handleLoginStatus = this.handleLoginStatus.bind(this); 
        this.handleUsername = this.handleUsername.bind(this); 
        this.handleLeftButtonClick = this.handleLeftButtonClick.bind(this); 
        this.unMountComponent = this.unMountComponent.bind(this); 
        this.handleRightButtonClick = this.handleRightButtonClick.bind(this); 
    }

    
  renderResult(e){
    if(window.location.href.toString().includes("search")){ //FIX THISSSS rtyytrhsdh53426hbhe5trgdf 
      return <Result></Result>
    }
    else{
      return <Home></Home>; 
    } 
  }; 


//   checkSession(){
//     const link = "http://localhost:8000/"; 
//     const url = `${link}api/login`;
//     const fetch = require('node-fetch'); 
//     fetch(url, {
//         method: "POST", 
//         headers: {
//             'Content-Type': 'application/json',
//             "Accept": "application/json"
//         },
//         credentials: 'include', 
//     }, 
//     ).then( data => data.json()).then(d => this.parseResponse(d)); 
//   };


//   parseResponse(data){
//     data = JSON.parse(JSON.stringify(data)); 
//     if("username" in data) { 
//       data["username"];
//      this.state.isLoggedI); 
//     }
   
//   }





  handleUsername(e){
    this.setState({username:e})
  }; 


    renderComponent(component){ 
    var d = { 
        "register": <Register  isClosed = {this.unMountComponent}></Register>,  
        "login":<Login isClosed = {this.unMountComponent} loginStatus = {this.handleLoginStatus} username = {this.handleUsername} ></Login>    


        }
    return(
        d[this.state.componentToBeRendered]
    )
    }

    handleLoginStatus(e){
        this.setState({loginStatus:e})
        console.log(e)
    }

    
    unMountComponent(){
        this.setState({componentToBeRendered:""})
    }

    handleLeftButtonClick(){
        this.setState({componentToBeRendered: "login"})
    }

    handleRightButtonClick(){
        this.setState({componentToBeRendered: "register"})
    }





    render(){
        return (
            <div>
                <Navbar leftButtonisClicked = {this.handleLeftButtonClick} rightButtonisClicked = {this.handleRightButtonClick} loginStatus = {this.state.loginStatus} username = {this.state.username} ></Navbar>
                {this.renderComponent()}
            </div>
            
        );
    }

}




export default App;

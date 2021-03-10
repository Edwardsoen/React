
import React, {Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Register from './Register';
import Result from './Result'
import {MDCDialog} from '@material/dialog';
import 'node-fetch';






class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '', 
      openResult:false, 
    };
    this.props = props; 
    this.handleChange = this.handleChange.bind(this); 
    this.request = this.request.bind(this); 
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value});
    
  }
 
  componentDidMount(){
    var search = "tseting"; 
    var sites = "sits"; 
    var amount = "20";
  
  

  }

  request(){
      // var search = this.state.inputValue; 
      // var sites = "sits"; 
      // var amount = "20";
      // const url = `http://192.168.111.128:3000/search/all?search=${search}&sites=${sites}&amount=${amount}`;  
      // const fetch = require('node-fetch'); 
      
      // fetch(url,{
      //   credentials: 'same-origin'
      // }).then(res => res.text())
      //     .then(data => console.log(data))
    
        }

    

  handleLoginClick(){
    
    const d = new MDCDialog(document.querySelector('#loginDialog')); 
    d.open();  
    
    
  }

  handleRegisterClick(){
    const d = new MDCDialog(document.querySelector('#registerDialog'));
    d.open();
    
  }
  renderResult(e){
    if(window.location.href.toString().includes("search")){ //FIX THISSSS AHAHAHAHAHHAAH 
      return <Result></Result>

    }
    else{
      return null; 
    } 
  }; 



    render(){
        return (
        
            <div>
              <Login></Login>
              <Register></Register>
            <nav className="navbar navbar-expand-lg navbar-dark" style ={{position:"relative", backgroundColor: "black"}} aria-hidden = "true" >
            <div className="container-fluid"  > 
              <a className="navbar-brand" href="/">Home</a>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"style ={{width:"150%"}}>
                <form className="d-flex" style ={{width:"100%"}}  method = "GET" action = "search">
                    <input className="form-control me-2" type="search" placeholder="Search" id="Search" style={{backgroundColor:'black', borderColor:"grey", color:'white'}} onChange = {this.handleChange} name = "q" ></input>
                    <button className="btn btn-outline-success" type="submit" style={{color:'white', border:"none"}}> Search</button>
                </form>
      
                
                </ul>
                <a className="btn btn-outline-dark" style={{color:'white',border:'none' }} onClick = {this.handleLoginClick}>Login</a>
                <a className="btn btn-outline-dark"  style={{color:'white',border:'none'}} onClick = {this.handleRegisterClick}>Register</a>
              </div>
            </div>
          </nav>
          {this.renderResult()}
          
          
            </div>
        ); 
    }
}



export default Navbar; 
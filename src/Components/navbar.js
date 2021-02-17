
import React, {Component} from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Login from './Login';
import App from './App';
import Register from './Register';
import Result from './Result'
import {MDCDialog} from '@material/dialog';






class Navbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
    this.props = props; 
    this.handleChange = this.handleChange.bind(this); 

  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }
 

  

  componentDidMount(){
    // const d = new MDCDialog(document.querySelector('.mdc-dialog'));  
    // d.open();  


  }
  handleLoginClick(){
    const d = new MDCDialog(document.querySelector('#loginDialog'));  
    d.open();  
    
  }

  handleRegisterClick(){
    const d = new MDCDialog(document.querySelector('#registerDialog'));
    d.open();
  }



    render(){
        return (
        




            <Router>
            <div>
              <Login></Login>
              <Register></Register>
            <nav class="navbar navbar-expand-lg navbar-dark" style ={{position:"relative", backgroundColor: "black"}} aria-hidden = "true" >
            <div class="container-fluid"  > 
              <a class="navbar-brand" href="/">Home</a>
              
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"style ={{width:"150%"}}>

                <form class="d-flex" style ={{width:"100%"}}  method = "GET" action = "search">
                  
                    <input class="form-control me-2" type="search" placeholder="Search" id="Search" style={{backgroundColor:'black', borderColor:"grey", color:'white'}} onChange = {this.handleChange} name = "q" ></input>
                    <button class="btn btn-outline-success" type="submit" style={{color:'white', border:"none"}}>Search</button>
                </form>
      
                
                </ul>
                <a class="btn btn-outline-dark" style={{color:'white',border:'none' }} onClick = {this.handleLoginClick}>Login</a>
                <a class="btn btn-outline-dark"  style={{color:'white',border:'none'}} onClick = {this.handleRegisterClick}>Register</a>
              </div>
            </div>
          </nav>
            </div>

            <Switch>
                <Route path = "/search" component = {() => <Result searchItem = {this.state.inputValue}/>}/>
              </Switch>
            </Router>  

        ); 
    }
}



export default Navbar; 
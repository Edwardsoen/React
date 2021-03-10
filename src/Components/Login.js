import React, {Component} from 'react'
import {MDCDialog} from '@material/dialog';



class Login extends React.Component{
    componentDidMount(){
        const d = new MDCDialog(document.querySelector('.mdc-dialog')); 
        
    }
    

    render(){
        return(
            <div className = "mdc-dialog" id = "loginDialog">
            <div className = "mdc-dialog__container">
              <div className = "mdc-dialog__surface">  
                <div className = "mdc-dialog__content">
                  <div>
                  <form>
                <div className= "mb-3">
                    <label className= "form-label" htmlFor = "username">Username</label>
                    <input id = "LoginUsername" className = "form-control"></input>
                </div>
                <div className = "mb-3">
                    <label className= "form-label" htmlFor = "password">Password</label>
                    <input type = "password" name = "password" id= "LoginPassword" className = "form-control"></input>
                    <input type = "checkbox" name ="rememberMe"></input> 
                    <label htmlFor = "rememberMe" style = {{margin:'3px'}}> Remember me </label>
                    <hr style = {{borderStyle: "none"}}></hr>
                     <input type = "commit" defaultValue = "Login" className = "btn btn-primary" style = {{width : "100%"}} ></input>
                </div>
            </form>
                  </div>
                </div>
              <div className = "mdc-dialog__actions">
              <a href =  "/" name = "forgotPassword" style = {{paddingRight:"50px"}}>Forgot password?</a>
                <button data-mdc-dialog-action = "Cancel" className = "btn btn-outline-seconday"> Cancel </button>  
                </div> 
              </div>
              </div>  
              <div className="mdc-dialog__scrim"></div>
          </div>
        //TODO: CHANGE CANCEL BUTTON TO X MARK 
        ); 
    }

}

export default Login
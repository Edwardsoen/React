import React, {Component} from 'react'; 
import {MDCMenu} from '@material/menu';
import Profile from './profile'
import Modal from 'bootstrap/js/dist/modal'; 


class Menu extends React.Component{
    constructor(props){
        super(props); 
        this.state = { 
            isLoggedOut : false
        }; 
        this.props = props; 
        this.handleLogout = this.handleLogout.bind(this); 
    }

    componentDidMount(){
        let menu = new MDCMenu(document.querySelector('.mdc-menu'));
        // menu.open = true;
    }

    generateSession(){
        var link =  "http://localhost:8000/api/sesion";
        fetch(link, {
          credentials: 'include'
        });  
      }


    handleLogout(){
        this.props.isLoggedOut("false"); 
        this.generateSession()
        document.cookie = "sessionid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }; 

    handleAccount(){
        let myModal = new Modal(document.getElementById('staticBackdrop'), {})
        myModal.show(); 
  
        
    }



    render(){
        return(
            <div style = {{height: "inherit", width: "inherit"}}>
                {/* <Profile></Profile> */}
            <div class="mdc-menu mdc-menu-surface" style = {{overflow: "auto"}} >
             
                <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
                    <li class="mdc-list-item" role="menuitem" onClick = {this.handleAccount}>
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Account</span>
                    </li>
                    <li class="mdc-list-item" role="menuitem" onClick = {this.handleLogout}>
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Logout</span>
                    </li>
                </ul>
            </div>
            </div>
        );
    };
};


export default Menu; 
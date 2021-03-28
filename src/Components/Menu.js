import React, {Component} from 'react'; 
import {MDCMenu} from '@material/menu';


class Menu extends React.Component{
    constructor(props){
        super(props); 
        this.state = { 

        }; 
        this.props = props; 
    }

    componentDidMount(){
        let menu = new MDCMenu(document.querySelector('.mdc-menu'));
        // menu.open = true;
    }
    openMenu(){
        
    };



    render(){
        return(
            <div class="mdc-menu mdc-menu-surface">
                <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
                    <li class="mdc-list-item" role="menuitem">
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Profile</span>
                    </li>
                    <li class="mdc-list-item" role="menuitem">
                    <span class="mdc-list-item__ripple"></span>
                    <span class="mdc-list-item__text">Logout</span>
                    </li>
                </ul>
            </div>
        );
    };
};


export default Menu; 
import Navbar from "./navbar";
import React, {Component} from 'react'; 
import {$,data,jQuery} from 'jquery';
import {MDCTabBar} from '@material/tab-bar'; 
import { chips, menu, tab } from "material-components-web";
import {MDCMenu} from '@material/menu';
import {MDCChipSet} from '@material/chips';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';




const classes = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: 'flex',
      // flexWrap: 'wrap',
      // justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
    },
  }),
);





class Result extends React.Component{
    constructor(props) {
        super(props)
        this.props = props; 
        this.state = {
            Query : "", 
        }
        
    }


    componentDidMount(){
        const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
        const chipSetEl = document.querySelector('.mdc-chip-set');
        const chipSet = new MDCChipSet(chipSetEl);
        
       
    }

    createTab(title, isActive){
        if (isActive)
        {
            var s = "mdc-tab mdc-tab--active";
            var s2 = "mdc-tab-indicator mdc-tab-indicator--active";
        }else {
            var s = "mdc-tab mdc-tab";
            var s2 = "mdc-tab-indicator mdc-tab-indicator"
        }
        return (
            <button class={s} tabindex="0" >
            <span class="mdc-tab__content" >
              <span class="mdc-tab__text-label" style = {{color:"white"}}>{title}</span>
            </span>
            <span class={s2} >
              <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline "></span>
            </span>
            <span class="mdc-tab__ripple"></span>
          </button>
        );
    }

    createChips(title, isSelected){
        if(isSelected){
            var s = "mdc-chip mdc-chip--selected";
        }else {
            var s = "mdc-chip";
        }
        return(
            <div class={s} role="row" style = {{background:"grey"}}>
            <div class="mdc-chip__ripple"></div>
            <span class="mdc-chip__checkmark" >
              <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                <path class="mdc-chip__checkmark-path" fill="none" stroke="black"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
              </svg>
            </span>
            <span role="gridcell">
              <span role="checkbox" tabindex="0" aria-checked="false" class="mdc-chip__primary-action">
                <span class="mdc-chip__text"><span style={{color:"white"}}>{title}</span></span>
              </span>
            </span>
          </div>
        );


    }

    createImageItem(src){
        return(
            <li class="mdc-image-list__item">
            <div class="mdc-image-list__image">
              <img class="mdc-image-list__image" src={src}/>
            </div>
          </li>
        ); 
    }
   
  
   

    render(){
        return(
            <div>
            <div class="mdc-chip-set mdc-chip-set--filter" role="grid">
                {this.createChips("testing1", true)}
                {this.createChips("testing1", false)}
                {this.createChips("testing1", false)}
            </div>

            <div className = "mdc-tab-bar" role = "tablist">
                <div className = "mdc-tab-scroller" >
                    <div className = "mdc-tab-scroller__scroll-area">
                        <div className = "mdc-tab-scroller__scroll-content" >
                            {this.createTab("all", true)}
                            {this.createTab("test", false)}
                            {this.createTab("test2", false)}
                            {this.createTab("all", false)}
                        </div>
                    </div>
                </div>
            </div>  

            <div >
         


                <GridList cellHeight='150'   cols="3">
                    <GridListTile>
                      <img src= "https://it-s.com/wp-content/uploads/2020/07/concept-art.jpg"/>
                    </GridListTile>
                    <GridListTile>
                      <img src= "https://www.clipstudio.net/wp-content/uploads/2019/09/0034_001-1.jpg"/>
                    </GridListTile>
                 
                    <GridListTile>
                      <img src= "https://cdna.artstation.com/p/assets/images/images/002/342/932/large/daeho-cha-.jpg?1460522296"/>
                    </GridListTile>
                 
                 
                </GridList>
          </div>









        </div>
        )
    }
}


export default Result; 
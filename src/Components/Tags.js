
import React, {Component} from 'react'; 
import {MDCChipSet} from '@material/chips';




class Tags extends React.Component{
    constructor(props){
        super(props)
        this.props = props;
        this.state = { 
            tagList:[],            
        }; 
    }
    componentDidMount(){
        this.getTagsList(); 
    }
    componentDidUpdate(){
        try { 
            const chipSet = new MDCChipSet(document.querySelector('.mdc-chip-set'));
            chipSet.listen('MDCChip:selection', function(event){
              console.log(event.detail); 
            }); 
        }catch(e) {
            console.log(e);
        }

    }


    getTagsList(){
        const url = "http://192.168.111.128:3000/api/tags";
        const fetch =require('node-fetch');
        fetch(url).then(res => res.json()).then(data => JSON.parse(JSON.stringify(data))["tags"]).then(d => this.setState({tagList:d}));
      }
      

    createChip(title, isSelected){
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
    
    createChipSet(chipList){
        var jsx =[]
        if (chipList.length ==0) { //if ajax return null 
          return null;
        } 
        else // if data is received
        { let i ; 
          for(i = 0; i <= chipList.length -1; i++){
            jsx.push(this.createChip(chipList[i], false)); 
          }
  
          // return jsx; 
          return(
            <div class="mdc-chip-set mdc-chip-set--filter" role="grid">
            {jsx}
            </div>
          );
        }; 
    }; 

    render(){
        return(
            <div>
                {this.createChipSet(this.state.tagList)}
            </div>
        

        )
    }
    
}


export default Tags; 
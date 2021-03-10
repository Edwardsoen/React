
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
      const link = "http://192.168.43.176:3000/"; 
        const url = `${link}/api/tags`;
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
          <li key = {title} style = {{listStyle:"none"}}>
            <div className={s} role="row" style = {{background:"grey"}}>
            <div className="mdc-chip__ripple"></div>
            <span className="mdc-chip__checkmark" >
              <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                <path className="mdc-chip__checkmark-path" fill="none" stroke="black"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
              </svg>
            </span>
            <span role="gridcell">
              <span role="checkbox" aria-checked="false" className="mdc-chip__primary-action">
                <span className="mdc-chip__text"><span style={{color:"white"}}>{title}</span></span>
              </span>
            </span>
          </div>
          </li>
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
            <div className="mdc-chip-set mdc-chip-set--filter" role="grid">
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
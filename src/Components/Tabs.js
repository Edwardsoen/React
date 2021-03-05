import React, {Component} from 'react'; 
import '../style/test.scss'; 
import {MDCTabBar} from '@material/tab-bar'; 


class Tabs extends React.Component{
    constructor(props){
        super(props)
        this.props = props; 
        this.state = { 
            sitesList:[], 
            isLoaded:false, 
            selectedTab:0, 
            isInitialized: false
            
        }

    }

    getSitesList(){
        const url = "http://192.168.111.128:3000/api/sites";
        const fetch =require('node-fetch');
        fetch(url).then(res => res.json()).then(data=> this.setState({sitesList:Object.keys(JSON.parse(JSON.stringify(data)))})); //JSON TO KEYS LIST
      };


    componentDidUpdate(){
        if(this.state.isInitialized == false){
            try {
                const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
                var tabs  = document.querySelectorAll('.mdc-tab');
                tabBar.listen('MDCTabBar:activated', function(event) {
                    let tab = tabs[event.detail.index];
                    this.setState({slectedTab:event.detail.index});
                    this.props.isChanged(this.state.sitesList[event.detail.index]); 
                }.bind(this));
        
                
                }catch(e){
                }
            };
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
    componentDidMount(){
        this.getSitesList(); 
    }





    render(){
        return (
            <div>
                   <div className = "mdc-tab-bar" role = "tablist">
                <div className = "mdc-tab-scroller" >
                    <div className = "mdc-tab-scroller__scroll-area">
                        <div className = "mdc-tab-scroller__scroll-content" >                     
                            {this.state.sitesList.map((v, i) => {
                              return this.createTab(v, false)
                            })
                            } 
                        </div>
                    </div>
                </div>
            </div>  

            </div>


        )


    }
}


export default Tabs; 
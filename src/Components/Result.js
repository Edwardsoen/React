
import React, {Component} from 'react'; 
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tags from './Tags'; 
import Tabs from './Tabs';
import '../style/index.css'

import '../style/test.scss';
//TODO: - DYNAMIC IMAGE SCALING, INFINITE SCROLL, TAGS & TABS 



class Result extends React.Component{
    constructor(props) {
        super(props)
        this.props = props; 
        this.state = { 
          selectedTab: "all", 
          imagesData : {"artstation":[{"url":"https://www.artstation.com/artwork/8Y906","icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/33d3232a-6dd5-4db6-887c-e782918c3508/d8s0p2p-8e76c128-e258-48f9-ad36-355911839dd1.jpg/v1/fit/w_150,h_150,q_70,strp/mlp_cmc__no_risk___no_reward__by_satrathai_d8s0p2p-150.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MDAiLCJwYXRoIjoiXC9mXC8zM2QzMjMyYS02ZGQ1LTRkYjYtODg3Yy1lNzgyOTE4YzM1MDhcL2Q4czBwMnAtOGU3NmMxMjgtZTI1OC00OGY5LWFkMzYtMzU1OTExODM5ZGQxLmpwZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uBzmtJ0wiIRXP1Uzr3Gs_pPnbjxsRr2pIiXD_dlpAzU","isAdult":false},{"url":"https://www.artstation.com/artwork/OvEAy","icon":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3722ece-5cd5-4f55-a97c-d38755b4fe85/d8jtv0q-33f3e49d-37d7-421e-8dea-abe5a2bae2c3.png/v1/fit/w_150,h_150,q_70,strp/lady_beauty_by_bright_light_nsh_d8jtv0q-150.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02MDAiLCJwYXRoIjoiXC9mXC9iMzcyMmVjZS01Y2Q1LTRmNTUtYTk3Yy1kMzg3NTViNGZlODVcL2Q4anR2MHEtMzNmM2U0OWQtMzdkNy00MjFlLThkZWEtYWJlNWEyYmFlMmMzLnBuZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OWmb9lmchPaNajNgLgkGI9OnqO5pX0BFz4c0GWGX6hQ","isAdult":false},{"url":"https://www.artstation.com/artwork/6r31W","icon":"https://cdnb.artstation.com/p/assets/images/images/010/806/811/smaller_square/josu-solano-action-keyframe-lr.jpg?1526333097","isAdult":false},{"url":"https://www.artstation.com/artwork/RY6GVA","icon":"https://cdnb.artstation.com/p/assets/images/images/019/567/009/20190725081248/smaller_square/thomas-dubois-girl-text-web.jpg?1564060368","isAdult":false},{"url":"https://www.artstation.com/artwork/v23Nmd","icon":"https://cdna.artstation.com/p/assets/images/images/034/629/770/smaller_square/james-busby-7.jpg?1612805868","isAdult":false}]}
        }; 
        this.handleTabChange = this.handleTabChange.bind(this); 
      }

    
    getImageData(search, siteCode, amount){
          //sitesCide = site code from sitseList sitesList data [0] == all
      const url = `http://192.168.111.128:3000/search/all?search=${search}&sites=${siteCode}&amount=${amount}`;  
      const fetch = require('node-fetch'); 
      fetch(url,{
        credentials: 'same-origin'
      }).then(res => res.json())
          .then(data => this.setState({imagesData:JSON.parse(JSON.stringify(data))})); 
    }

    componentDidMount(){
      var searchItem = new URLSearchParams(window.location.search).get("q"); 
      this.getImageData(searchItem, this.state.sites, 20); 
    }



  


    parseImageData(){
      if (this.state.selectedTab == "all" ){ //if all tab selected, merge and flatten list
        var nestedListData =[]; 
        var i;
        var keys = Object.keys(this.state.imagesData);  
        for(i =0; i <= keys.length -1; i ++){
            var d = this.state.imagesData[keys[i]]
            nestedListData.push(d)
          }
          return [].concat.apply([], nestedListData); //return flatten list == [{url:...., icon:....., }] 
        }
      else{
        return this.state.imagesData[this.state.selectedTab]; 
        //grab data from specitific sitse 
      }
      
    }

    createTabView(){
      try {
      var data = this.parseImageData(); 
      var i;
      var JsXview = [];  
      for(i=0; i <= data.length - 1; i++){//fix this
        let url = data[i]['url'];
        let icon = data[i]["icon"]
        console.log(url); 
          JsXview.push(
                    <GridListTile style = {{borderRadius: "10%", overflow:"hidden"}}>
                      <a href = {url }><img src= {icon} height = "300" width = "300" style = {{objectFit:"cover"}}/></a>
                    </GridListTile>
        )
      }
      return JsXview; 
    }catch(e){
        return null; 
      }
    }
    
    handleTabChange(e){
      this.setState({selectedTab:e});
    }

    
  





    render(){
        return( 
            <div>
             <Tags></Tags>
            <Tabs isChanged = {this.handleTabChange}></Tabs>
                 <GridList cellHeight='300'   cols="5" style ={{maxWidth:"100%"}}>
                    {this.createTabView()}
                </GridList> 
        </div>
        )
    }
}


export default Result; 
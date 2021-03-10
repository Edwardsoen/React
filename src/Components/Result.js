
import React, {Component} from 'react'; 
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tags from './Tags'; 
import Tabs from './Tabs';
import '../style/index.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import '../style/test.scss';


class Result extends React.Component{
    constructor(props) {
        super(props)
        this.props = props; 
        this.state = { 
          selectedTab: "all", 
          imagesData: {}, 
          items: Array.from({ length: 70 })
         }; 
        this.handleTabChange = this.handleTabChange.bind(this); 
        this.appendSitesList = this.appendSitesList.bind(this); 
        this.fetchMoreData = this.fetchMoreData.bind(this); 
      }


    
    getImageData(search, siteCode, amount){
          //sitesCide = site code from sitseList sitesList data [0] == all
          const link = "http://192.168.43.176:3000/"; 
      const url = `${link}/search/all?search=${search}&sites=${siteCode}&amount=${amount}`;  
      const fetch = require('node-fetch'); 
      fetch(url,{
        credentials: 'same-origin'
      }).then(res => res.json())
          .then(data => this.setState({imagesData:JSON.parse(JSON.stringify(data))})).catch(error => {console.log("erorrr")}); 
    };

    componentDidMount(){
      var searchItem = new URLSearchParams(window.location.search).get("q"); 
      this.getImageData(searchItem, this.state.sites, 20); 
    };

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
    };

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
                    <GridListTile style = {{borderRadius: "10%", overflow:"hidden"}} key = {`list${i}`}>
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

    appendSitesList(e){
      var i; 
      var d = this.state.imagesData; 
      for(i=0; i <= e.length - 1; i++){//create key(sitesname)-value(empty list(to be appended))
        d[e[i]]  = []; //{sitse1: [], site2:[]......}
      
      };
      this.setState({imagesData:d});  
      this.setState({testing: e});
    }

    fetchMoreData(){
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    };

    render(){
        return( 
            <div>
             <Tags></Tags>
            <Tabs isChanged = {this.handleTabChange} siteslist = {this.appendSitesList}></Tabs>
            
                 <GridList cellHeight={300} cols={6} style ={{maxWidth:"100%"}}>
                    {this.createTabView()}
              </GridList> 
            
              {/* <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={true}>
                {this.state.items.map((i, index) => (
                  <div key={index}>
                    div - #{index}
                  </div>
                ))}
              </InfiniteScroll> */}


        </div>
        )
    }
}


export default Result; 
import React, {Component} from 'react';
import Header from "../common/Header";
import MapComponent from "../App/Making/MapComponent"

class Making extends Component{
    render(){
        return(
          <div>
              <Header/>
              <MapComponent/>
          </div>
        );
    }
}
export default Making;
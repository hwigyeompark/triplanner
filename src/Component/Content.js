import React, {Component} from 'react';
import Navbar from "./Navbar";

class Content extends Component{
    render(){
        return(
          <section id="content">
              <Navbar/>
          </section>
        );
    }
}

export default Content;
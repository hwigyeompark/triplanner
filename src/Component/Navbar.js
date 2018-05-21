import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Navbar.css';

class Navbar extends Component{
    render(){
        return(
          <div id="nav">
              <h1><img title="go to Main" alt="go to Main" src={logo}/></h1>
              <ul>
                  <li>일정만들기</li>
                  <li>여행기작성</li>
              </ul>
          </div>
        );
    }
}
export default Navbar;
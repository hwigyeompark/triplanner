import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div id="nav">
                <h1><img src={logo}/></h1>
              <ul id="nav-ul">
                  <li>일정만들기</li>
                  <li>여행기작성</li>
              </ul>
          </div>
        );
    }
}
export default Navbar;
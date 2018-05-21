import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div id="nav">
                <h1><img src={logo}/></h1>
              <ul id="nav-ul">
                  <Link to="/making"><li><a href="#make plan">일정만들기</a></li></Link>
                  <li><a href="#travel writing">여행기작성</a></li>
              </ul>
          </div>
        );
    }
}
export default Navbar;
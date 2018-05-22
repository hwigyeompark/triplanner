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
                  <li><Link href="#make plan" to="/making">일정만들기</Link></li>
                  <li><Link href="#travel writing" to="/writing">여행기작성</Link></li>
              </ul>
          </div>
        );
    }
}
export default Navbar;
import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div id="nav">
                <h1><a href="/" ><img src={logo}/></a></h1>
                <div id="nav-ul">
                    <ul>
                        <li><a href="/making">일정만들기</a></li>
                        <li><a href="/writing">여행기작성</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Navbar;
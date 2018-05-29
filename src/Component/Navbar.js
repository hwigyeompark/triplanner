import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Navbar.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Making from "../routes/Making";
import Writing from "../routes/Writing";

class Navbar extends Component{
    render(){
        return(
            <div id="nav">
                <BrowserRouter>
                    <h1><img src={logo}/></h1>
                    <ul id="nav-ul">
                        <Route path='/making' component={Making}><li>일정만들기</li></Route>
                        <Route path='/writing' component={Writing}><li>여행기작성</li></Route>
                    </ul>
                </BrowserRouter>
            </div>
        );
    }
}
export default Navbar;
import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Navbar.css';
import { Router, Route, Link } from 'react-router-dom';
import Making from "../routes/Making";
import Writing from "../routes/Writing";

const makeRoot = () => (
    <Router>
        <Route path="/making" component={Making}/>
    </Router>
);

const writeRoot = () => (
    <Router>
        <Route path="/writing" component={Writing}/>
    </Router>
);

class Navbar extends Component{
    render(){
        return(
                <div id="nav">
                    <h1><img src={logo}/></h1>
                  <ul id="nav-ul">
                      <li><Link to={makeRoot}>일정만들기</Link></li>
                      <li><Link to={writeRoot}>여행기작성</Link></li>
                  </ul>
                </div>
        );
    }
}
export default Navbar;
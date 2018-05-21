import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Main.css';
import $ from "jquery";
import Navbar from "./Navbar";

class Main extends Component{
    render(){
        return(
            <div id="wrap">
                <Navbar/>
                <div id="intro-ment">
                    <h1>Let's go on a Trip</h1>
                </div>
            </div>
        );
    }
}


export default Main;
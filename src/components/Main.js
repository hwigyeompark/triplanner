import React, {Component} from 'react';
import '../css/Main.css';
import Content from "./Content";


class Main extends Component{
    render(){
        return(
            <div id="wrap">
                <div id="container">
                    <div id="intro-ment">
                        <h1>Let's go on a Trip</h1>
                    </div>
                    <br/>
                    <div id="search">
                        <input type="text" style={{width:"90%", height:"100%"}}/>
                        <button id="searchBtn">Search</button>
                    </div>
                </div>
                <Content/>
            </div>
        );
    }
}
export default Main;
import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Main.css';
import $ from "jquery";

class Main extends Component{
    mainStart = () => {
        $("#wrap").animate({"top" : "-80%"}, 200);
    };
    render(){
        return(
            <div id="wrap">
                <div className="header">
                    <h1><img src={logo}/></h1>
                </div>
                <section>
                    <h1>Let's go on a Trip</h1>
                    <button type="button" onClick={this.mainStart}>Let's Go</button>
                </section>
            </div>
        );
    }
}


export default Main;
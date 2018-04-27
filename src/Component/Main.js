import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Main.css';
import "../js/jquery-1.12.3.min";

class Main extends Component{
    mainStart = () => {
        $(function () {
            $("#wrap").animate({"top" : "-80%"}, 100);
        });
    };
    render(){
        return(
            <div id="wrap">
                <div className="header">
                    <h1><img src={logo}/><a href="/public/index.html"></a></h1>
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
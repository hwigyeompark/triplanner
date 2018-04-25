import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../css/Main.css';

class Main extends Component{
    render(){
        return(
            <div id="wrap">
                <div className="header">
                    <h1><img src={logo}/><a href="/public/index.html"></a></h1>
                </div>
                <section>
                    <h1>Let's go on a Trip</h1>
                    <button type="submit" onClick={mainStart}>Let's Go</button>
                </section>
            </div>
        );
    }
}
class mainStart{

}


export default Main;
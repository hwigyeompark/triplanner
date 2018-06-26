import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Making from './routes/Making';
import Writing from './routes/Writing';
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import Detail1 from "./Component/detail/Detail1";
import Detail2 from "./Component/detail/Detail2";
import Detail3 from "./Component/detail/Detail3";
import Footer from "./Component/Footer";
import Detail4 from "./Component/detail/Detail4";
import Detail5 from "./Component/detail/Detial5";
import Detail6 from "./Component/detail/Detial6";

class App extends Component {
  render(){
      return (
          <div>
              <Navbar/>
              <BrowserRouter>
                  <div>
                      <Route exact path='/' component={Main}/>
                      <Route path='/making' component={Making}/>
                      <Route path='/writing' component={Writing}/>
                      <Route path='/detail1' component={Detail1}/>
                      <Route path='/detail2' component={Detail2}/>
                      <Route path='/detail3' component={Detail3}/>
                      <Route path='/detail4' component={Detail4}/>
                      <Route path='/detail5' component={Detail5}/>
                      <Route path='/detail6' component={Detail6}/>
                  </div>
              </BrowserRouter>
              <Footer/>
          </div>
      );
  }
}

export default App;

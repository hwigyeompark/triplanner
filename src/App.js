import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Making from './routes/Making';
import Writing from './routes/Writing';
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";

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
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;

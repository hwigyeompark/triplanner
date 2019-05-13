import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Making from './routes/Making';
import Writing from './routes/Writing';
import HomeComponent from "./App/Home/HomeComponent";

export default class EntryComponent extends Component {
  render(){
      return (
          <div>
              <HomeComponent/>
              <BrowserRouter>
                  <div>
                      <Route path='/making' component={Making}/>
                      <Route path='/writing' component={Writing}/>
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}

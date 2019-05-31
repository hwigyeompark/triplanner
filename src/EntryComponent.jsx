import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import {Making, Writing} from './pages'
import HomeComponent from "./App/Home/HomeComponent";

export default class EntryComponent extends Component {
  render(){
      return (
          <div>
              <BrowserRouter>
                  <div>
                      <Route exact path="/" component={HomeComponent} />
                      <Route path="/making" component={Making}/>
                      <Route path="/writing" component={Writing}/>
                  </div>
              </BrowserRouter>
          </div>
      );
  }
}

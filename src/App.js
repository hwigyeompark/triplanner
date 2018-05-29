import React, { Component } from 'react';
import Main from './Component/Main';
import Content from  './Component/Content';
import { BrowserRouter, Route } from 'react-router-dom';

import Making from './routes/Making';
import Writing from './routes/Writing';

class App extends Component {
  render(){
      return (
          <div>
              <Main/>
              <Content />
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

export default App;

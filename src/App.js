import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Component/Main';
import Content from  './Component/Content';
import Making from './routes/Making';

class App extends Component {
  render(){
          return (
              <Router>
                  <div>
                    <Main/>
                    <Content />
                      <Switch>
                          <Route path = "/making" component={Making}/>
                      </Switch>
                  </div>
              </Router>
          );
  }
}

export default App;

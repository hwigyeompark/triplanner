import React, { Component } from 'react';
import Main from './Component/Main';
import Content from  './Component/Content'

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

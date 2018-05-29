import React, { Component } from 'react';
import Main from './Component/Main';
import Content from  './Component/Content';

class App extends Component {
  render(){
      return (
          <div>
              <Main/>
              <Content />
          </div>
      );
  }
}

export default App;

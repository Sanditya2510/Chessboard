import React, { Component } from 'react';
import Functions from './Functions';
import { Button } from 'antd';
class App extends Component {
  constructor(){
    super();
  }
  
  render() {
    return (
      <div>
        <div style={boardsContainer}>
          <Functions />
        </div>
      </div>
    );
  }
}

export default App;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};

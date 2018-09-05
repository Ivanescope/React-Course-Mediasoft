import React, { Component } from 'react';
import './style.css';
import LeftSide from '../LeftSide';
import Center from '../Center';
import RightSide from '../RightSide';


class App extends Component {
  render() {
    return (
      <div className = 'outerContainer'>
        <div className = 'left'>
          <LeftSide />
        </div>
        <div className = 'centr'>
          <Center />
        </div>
        <div className = 'right'>
          <RightSide />
        </div>
      </div>
    )
  }
}

export default App;
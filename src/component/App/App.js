import React, { Component } from 'react';
import './style.css';
import LeftSidebar from '../LeftSidebar';
import Center from '../Center';
import RightSide from '../RightSide';


class App extends Component {
  render() {
    return (
      <div className = 'outerContainer'>
        <div className = 'left'>
          <LeftSidebar />
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
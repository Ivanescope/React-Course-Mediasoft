import React, { Component } from 'react';
import './style.css';
import TaskList from '../TaskList';
import HeaderCenter from '../HeaderCenter';
import FilterButtons from '../FiterButtons';


class Center extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToday:false
    }
  }
  changeToggle = (value) => {
    this.setState({isToday: value});
  }

  render() {
    return (
      <div className = 'container-center'>
          <div className = 'header-center'>
            <HeaderCenter />
          </div>
          <div className = 'filter-buttons'>
            <FilterButtons changeToggle = {this.changeToggle} isToday = {this.state.isToday}/>
          </div>
          <div className = 'article-center'>
            <TaskList isToday = {this.state.isToday}/>
          </div>
      </div>
    )
  }
}

export default Center;
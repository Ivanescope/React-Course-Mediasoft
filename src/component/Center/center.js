import React, { Component } from 'react';
import './style.css';
import TaskList from '../TaskList';
import HeaderCenter from '../HeaderCenter';
import Filter from '../FiterButton';


class Center extends Component {
  render() {
    return (
      <div className = 'container-center'>
          <div className = 'header-center'>
            <HeaderCenter />
          </div>
          <div className = 'filter-buttons'>
            <Filter />
          </div>
          <div className = 'article-center'>
            <TaskList />
          </div>
      </div>
    )
  }
}

export default Center;
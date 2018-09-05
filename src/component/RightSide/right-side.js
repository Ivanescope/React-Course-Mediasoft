import React, { Component } from 'react';
import './style.css';
import Calendar from 'react-calendar';
import TaskMini from '../TaskListMini';


class RightSide extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
    }
    this.changeDate = this.changeDate.bind(this);
  }
  changeDate(date ){
    this.setState({date});
  }
  

  render() {
    const day = this.state.date.getDate();
    const month = this.state.date.getMonth() + 1;
    const year = this.state.date.getFullYear();
    return (
      <div className = 'container-right-side'>
        <div className = 'calendar'>
        <div className = 'text-calendar'>Календарь</div>
          <Calendar
            onChange = {this.changeDate}
            value = {this.state.date}
          />
        </div>
        <div className = 'task-list-mini'>
          <div className = 'header-task-list-mini'>
          Список задач на {day}.{month}.{year}
          <TaskMini 
            day = {day} 
            month = {month}
            year = {year}/>
          </div>
        </div>
      </div>
      
    )
  }
}

export default RightSide;
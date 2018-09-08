import React, { Component } from 'react';
import './style.css';
import Calendar from 'react-calendar';
import TaskMini from '../TaskListMini';


class RightSide extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      firstDate: '',
      secondDate:'',
      toggleDate: true
    }
    this.changeDate = this.changeDate.bind(this);
    this.changeFirstDate = this.changeFirstDate.bind(this);
    this.changeSecondDate = this.changeSecondDate.bind(this);
    this.toggleDate = this.toggleDate.bind(this);
  }
  changeDate(date){
    this.setState({date});
    this.setState({toggleDate: true});
  }
  changeFirstDate(e){
    this.setState({firstDate:e.target.value})
  }
  changeSecondDate(e){
    this.setState({secondDate:e.target.value})
  }
  toggleDate(){
    this.setState({toggleDate:false});
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
        <div>
          <div className = 'range'>
            C:<input 
              type = 'date' 
              className = 'input-range' 
              value = {this.state.firstDate}
              onChange = {this.changeFirstDate}
              min = "2015-01-01"
              max = "2021-12-31" 
              />
            По:<input 
              type = 'date' 
              className = 'input-range' 
              value = {this.state.secondDate}
              onChange = {this.changeSecondDate}
              min = "2015-01-01"
              max = "2021-12-31" 
              />
              <button onClick = {this.toggleDate} className = 'buttonShowListRange'>Показать</button>
          </div>
          
        </div>
        <div className = 'task-list-mini'>
          <div className = 'header-task-list-mini'>
          {
            this.state.toggleDate ?
            (
            <span>Список задач на {day}.{month}.{year}
              <TaskMini  day = {day} month = {month} year = {year} />
            </span>
            ) :
            (
            <span>{this.state.firstDate.split('-').reverse().join('.')} - {this.state.secondDate.split('-').reverse().join('.')}
              <TaskMini  firstDate = {this.state.firstDate} secondDate = {this.state.secondDate} />
            </span>
            )
          }
          </div>
        </div>
      </div>
      
    )
  }
}

export default RightSide;
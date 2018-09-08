import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import MiniTask from '../MiniTask';


class TasksMini extends Component {
    showListTasks(){
        if(this.props.day){
            const month = (('' + this.props.month).length === 1) ? '0' + this.props.month : this.props.month;
            const day = (('' + this.props.day).length === 1) ? '0' + this.props.day : this.props.day;
            return this.props.tasks.map(task => {
                const date = this.props.year + '-' + month + '-' + day; 
                if(date === task.date && !task.isDeleted){
                    return (
                        < MiniTask key = {task.id} task = {task} />
                    )
                }
                return null;
            });
        } else {
            const firstDate = new Date(this.props.firstDate);
            const secondDate = new Date(this.props.secondDate);
            if(firstDate > secondDate){
                return <div className = 'warning'>Первая дата должна быть меньше второй</div>
            }else if('Invalid Date' === '' + firstDate || 'Invalid Date' === '' + secondDate){
                return <div className = 'warning'>Обе даты должны быть указаны</div>
            }
            return this.props.tasks.map(task => {
                const taskDate =  new Date(task.date);
                if(firstDate.getTime() <= taskDate.getTime() && taskDate.getTime() <= secondDate.getTime() && !task.isDeleted){
                    return (
                        < MiniTask key = {task.id} task = {task} />
                    )
                }
                return null;
            });
            
        }
    }

  render() {
    return (
        <div className = 'container-tasks-mini'>
            {this.showListTasks()}
        </div>
      
    )
  }
}

function mapSTateToProps(state){
    return {
        tasks:state.changeTasks.allTasks
    }
}

export default connect(mapSTateToProps)(TasksMini);
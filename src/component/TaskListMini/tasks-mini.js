import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import MiniTask from '../MiniTask';


class TasksMini extends Component {
    showListTasks(){
        const month = (('' + this.props.month).length === 1) ? '0' + this.props.month : this.props.month;
        const day = (('' + this.props.day).length === 1) ? '0' + this.props.day : this.props.day;
        return this.props.tasks.map(task => {
            const date = this.props.year + '-' + month + '-' + day; 
            if(date === task.date){
                return (
                    < MiniTask key = {task.id} task = {task} />
                )
            }
            return null;
            
        });
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
        tasks:state.tasks.allTasks
    }
}

export default connect(mapSTateToProps)(TasksMini);
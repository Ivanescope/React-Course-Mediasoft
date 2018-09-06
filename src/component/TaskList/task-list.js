import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Task from '../Task';

class TaskList extends Component {
    constructor(props){
        super(props);

        this.showList = this.showList.bind(this);
    }


    showList(){
        const curentMonth = 1 + new Date().getMonth() + '';
        const day = (('' + new Date().getDate()).length === 1) ? '0' + new Date().getDate() : new Date().getDate();
        const month = (curentMonth.length === 1) ? '0' + curentMonth : curentMonth;
        return this.props.tasks.map((task) => {
            const currentDate = new Date().getFullYear() + '-' + month + '-' + day;
            if(task.date === currentDate && !task.isDeleted){
                return <Task key = {task.id} task = {task}/>
            }
            return null;
        });
    }

    render() {
        return (
            <div className = 'other-container-task'>
                {this.showList()}                   
            </div>
        )
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
    case 'FILTER_DONE':
        return todos.filter(task => task.group === 'Выполнено');
    case 'FILTER_TO_DO':
        return todos.filter(task => task.group === 'Выполнить');
    case 'FILTER_IS_PROPGRESS':
        return todos.filter(task => task.group === 'Выполняется');
    case 'IMPORTANT_TASKS':
            const nextTodos = todos.slice();
            return nextTodos.sort(task => {
            if(!task.favorite) return 1;
                return -1;
            }); 
    case 'SORT_ALPHABET': 
        const updateTodos = todos.slice();
        return updateTodos.sort((first, second) => {
            if(first.name.toLocaleLowerCase() > second.name.toLocaleLowerCase()){
                return 1;
            } 
            return -1;
        })
    case 'RESET_FILTERS':
        return todos;
      
    default:
        return todos;
    }
  };



function mapStateToProps(state){
    return{
        tasks:getVisibleTodos(state.changeTasks.allTasks, state.filtersTasks)
    }
}


export default connect(mapStateToProps)(TaskList);
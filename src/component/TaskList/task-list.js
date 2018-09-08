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
        if(!this.props.tasks.length){
            return <div className = 'infoTodosNone'>На сегодня нет запланированных задач </div>
        }

        if(this.props.isToday){
            const curentMonth = 1 + new Date().getMonth() + '';
            const day = (('' + new Date().getDate()).length === 1) ? '0' + new Date().getDate() : new Date().getDate();
            const month = (curentMonth.length === 1) ? '0' + curentMonth : curentMonth;
            let todos = this.props.tasks.filter((task) => {
                const currentDate = new Date().getFullYear() + '-' + month + '-' + day;
                return task.date === currentDate && !task.isDeleted; 
            });
            return todos.map((task) => {
                return <Task key = {task.id} task = {task}/>
            });
        }


        
        return this.props.tasks.map((task) => {
            return <Task key = {task.id} task = {task}/>
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
    todos = todos.filter(task => !task.isDeleted);
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
    
        default:
            return todos
        }
  };



function mapStateToProps(state){
    return{
        tasks: getVisibleTodos(state.changeTasks.allTasks, state.filtersTasks),
    }
}


export default connect(mapStateToProps)(TaskList);
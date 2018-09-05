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

function mapStateToProps(state){
    return{
        tasks:state.tasks.allTasks
    }
}


export default connect(mapStateToProps)(TaskList);
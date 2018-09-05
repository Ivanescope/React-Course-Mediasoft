import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SavedTask from '../SavedTask'


class SavedTasks extends Component {
    constructor(props){
        super(props);

        this.showListSavedTask = this.showListSavedTask.bind(this);
    }


    showListSavedTask(){
        return this.props.savedTasks.map(task => {
            return (
                <SavedTask key = {task.id} task = {task} />
            )
        });
    }

    render() {
        return (
            <div>
                <Link to = '/'>
                    <div className = 'text-to-main'>На главную</div>
                </Link>
                {this.showListSavedTask()}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        savedTasks:state.tasks.savedTasks
    }
}


export default connect(mapStateToProps)(SavedTasks);
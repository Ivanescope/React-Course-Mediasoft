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
            if(task.isDeleted){
                return (
                    <SavedTask key = {task.id} task = {task} />
                ) 
            }
            return null;
        });
    }

    render() {
        return (
            <div>
                <div className = 'text-to-main'>
                    <Link to = '/'>
                        На главную
                    </Link>
                </div>
                <div className = 'container-saved-list'>
                    {this.showListSavedTask()}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        savedTasks:state.changeTasks.allTasks
    }
}


export default connect(mapStateToProps)(SavedTasks);
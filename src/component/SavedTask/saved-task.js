import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import deleteButton from '../../style/Basket-delete.png';
import star from '../../style/star.png';
import reestablishTask from '../../action/reestablishTask';
import deleteTask from '../../action/deleteTask';


class SavedTask extends Component {
    constructor(props){
        super(props);

        this.reestablishTask = this.reestablishTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    reestablishTask(){
        this.props.reestablishTask(this.props.task)
    }
    deleteTask(){
       this.props.deleteTask(this.props.task)
    }

    render() {
        return ( 
            <div className = 'container-task' >
                <div className = 'header-task'>
                    <div>
                        {this.props.task.favorite ?
                            <img src = {star} className = 'star'alt = 'star' /> :
                            null
                        }
                    </div>
                    <div className = 'name-task'>{this.props.task.name}</div>
                    <div >
                        <img src = {deleteButton} 
                            className = 'button-delete' 
                            alt = 'delete' 
                            onClick = {this.deleteTask}/>
                    </div>
                </div>
                <div className = 'article-task'>
                    <div><span className = 'name-desc'>Описание: </span>
                        {this.props.task.description}
                    </div>
                    <div className = 'footer-task'>
                        <div><span className = 'name-date'>Дата:</span>{this.props.task.date.split('-').reverse().join('/')}</div>
                        <div className = 'restore-button' onClick = {this.reestablishTask}>Восстановить</div>
                        <div><span className = 'name-group'>Статус:</span>{this.props.task.group}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(){
    return {};
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        reestablishTask: reestablishTask,
        deleteTask: deleteTask
    }, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(SavedTask);
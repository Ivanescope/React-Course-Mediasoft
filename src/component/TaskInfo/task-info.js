import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import star from '../../style/star.png';
import editButton from '../../style/Pen-edit.png';
import ModalWindow from '../ModalWindow';

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActiveModalWindow:false
        }
        this.showModalWindow = this.showModalWindow.bind(this);
        this.closeModalWindow = this.closeModalWindow.bind(this);
    }


    closeModalWindow(){
        this.setState({isActiveModalWindow: false});
    }
    showModalWindow(){
        this.setState({isActiveModalWindow: true});
    }

  render() {
      const arrTask = this.props.tasks.filter(task => {
          return task.id === +this.props.match.params.id
      });
      const task = arrTask[0];
    return ( 
        <div>
            <div className = 'text-to-main'>
                <Link to = '/'>
                    На главную
                </Link>
            </div>
            {
                this.state.isActiveModalWindow ?
                <ModalWindow closeModalWindow = {this.closeModalWindow} task = {task}/> :
                null
            }
            <div className = 'container-task-info' >
                <div className = 'header-task-info'>
                    <div>
                        {task.favorite ?
                            <img src = {star} className = 'star-info' alt = 'star' /> :
                            null
                        }
                    </div>
                    <div className = 'name-task-info'>{task.name}</div>
                    <div>
                        <img src = {editButton} 
                            className = 'button-edit-info' 
                            alt = 'edit' 
                            onClick = {this.showModalWindow}
                        />
                    </div>
                </div>
                <div className = 'article-task-info'>  
                    <span className = 'name-desc-info'>Описание: </span>
                    {task.description}
                </div>
                <div className = 'footer-task-info'>
                    <div><span className = 'name-date-info'>Дата:</span>{task.date.split('-').reverse().join('/')}</div>
                    <div><span className = 'name-group-info'>Статус:</span>{task.group}</div>
                </div>
            </div> 
        </div> 
    )
  }
}
function mapStateToProps(state){
    return {
        tasks:state.changeTasks.allTasks
    }
}



export default connect(mapStateToProps)(Task);
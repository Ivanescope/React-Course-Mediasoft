import React, { Component } from 'react';
import './style.css';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import star from '../../style/star.png';
import deleteButton from '../../style/Basket-delete.png';
import editButton from '../../style/Pen-edit.png';
import transferTask from '../../action/transferTask';
import ModalWindow from '../ModalWindow';

class Task extends Component {
constructor(props){
    super(props);
    this.state = {
        isActiveModalWindow:false
    }


    this.transferTask = this.transferTask.bind(this);
    this.showModalWindow = this.showModalWindow.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);

}

transferTask(){
    this.props.transferTask(this.props.task)
}
closeModalWindow(){
    this.setState({isActiveModalWindow: false});
}
showModalWindow(){
    this.setState({isActiveModalWindow: true});
}

  render() {
    return ( 
        <div className = 'container-task' >
        {this.state.isActiveModalWindow ?
            <ModalWindow closeModalWindow = {this.closeModalWindow} task = {this.props.task}/> :
            null
        }
            <div className = 'header-task'>
                <div>
                    {this.props.task.favorite ?
                        <img src = {star} className = 'star'alt = 'star' /> :
                        null
                    }
                </div>
                <Link to = {{pathname: `/task/${this.props.task.id}`}}>
                    <div className = 'name-task'>{this.props.task.name}</div>
                </Link>
                <div >
                    <img src = {editButton} 
                        className = 'button-edit' 
                        alt = 'edit' 
                        onClick = {this.showModalWindow}/>
                    <img src = {deleteButton} 
                        className = 'button-delete' 
                        alt = 'delete' 
                        onClick = {this.transferTask}/>
                </div>
            </div>
            <div className = 'article-task'>
                <div>   
                    <span className = 'name-desc'>Описание: </span>
                    {this.props.task.description}
                </div>
                <div className = 'footer-task'>
                    <div><span className = 'name-date'>Дата:</span>{this.props.task.date.split('-').reverse().join('/')}</div>
                    <div><span className = 'name-group'>Статус:</span>{this.props.task.group}</div>
                </div>
            </div>
        </div>  
    )
  }
}

function mapStateToProps(){
    return {}
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({transferTask: transferTask}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Task);
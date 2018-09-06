import React, { Component } from 'react';
import './style.css';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteButton from '../../style/Basket-delete.png';
import editButton from '../../style/Pen-edit.png';
import transferTask from '../../action/transferTask';
import ModalWindow from '../ModalWindow';

class Task extends Component {
constructor(props){
    super(props);
    this.state = {
        isActiveModalWindow: false
    }

    this.showModalWindow = this.showModalWindow.bind(this);
    this.closeModalWindow = this.closeModalWindow.bind(this);
}

transferTask(task){
    this.props.transferTask(task)
}
closeModalWindow(){
    this.setState({isActiveModalWindow: false});
}
showModalWindow(){
    this.setState({isActiveModalWindow: true});
}

render() {
    return ( 
        <div className = 'task-mini' key = {this.props.task.id}>
        {this.state.isActiveModalWindow ?
            <ModalWindow closeModalWindow = {this.closeModalWindow}
                task = {this.props.task}/> :
            null
        }
            <Link to = {{pathname: `/task/${this.props.task.id}`}}>
                <div >{this.props.task.name}</div>
            </Link>        
            <div>
                <img src = {editButton} className = 'button-edit' alt = 'edit' onClick = {this.showModalWindow}/>
                <img src = {deleteButton} className = 'button-delete' alt = 'delete' onClick = {this.transferTask.bind(this, this.props.task)}/>
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
        transferTask: transferTask
    },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Task);
import React, { Component } from 'react';
import closeButton from '../../style/Close.png';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import editTask from '../../action/editTask';


class ModalWindow extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameTask: this.props.task.name,
            deskTask: this.props.task.description,
            groupTask: this.props.task.group,
            dateTask: this.props.task.date,
            favoriteTask: this.props.task.favorite
        }
        this.closeModalWindow = this.closeModalWindow.bind(this);
        this.onInputChangeTask = this.onInputChangeTask.bind(this);
        this.changeFavoriteState = this.changeFavoriteState.bind(this);
        this.editTask = this.editTask.bind(this);
    }


    closeModalWindow(){
        this.props.closeModalWindow()
    }
    onInputChangeTask(e){
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    }
    changeFavoriteState(e){
        this.setState({favoriteTask: e.target.checked});
    }

    editTask(){
        let editedTask = {
            id: this.props.task.id,
            name: this.state.nameTask,
            description: this.state.deskTask,
            group: this.state.groupTask ,
            date: this.state.dateTask,
            favorite: this.state.favoriteTask
        }
        this.props.editTask(editedTask)
        this.closeModalWindow();
    }
    
render(){
    return(
        <div id = 'modalWindow'>
            <div className = 'overlay'></div>
                <div className = 'modal-window'>
                    <div className = 'header-modal-window'>
                        <div>Редактировать задачу</div>
                        <div>
                            <img src = {closeButton} className = 'closeButton' alt = 'Закрыть' onClick = {this.closeModalWindow}/>
                        </div>
                    </div>
                    
                    <div className = 'MWName'>
                        <div>
                            <label >Название задачи:
                                <input type = 'text'
                                    id= 'MWname' 
                                    name = 'nameTask' 
                                    value = {this.state.nameTask} 
                                    onChange = {this.onInputChangeTask}/>
                            </label>  
                        </div>
                    </div>
                    <div className = 'MWdescription'>
                        <label>Описание:  
                            <textarea id = 'MWdescription' 
                                name = 'deskTask' 
                                value = {this.state.deskTask} 
                                onChange = {this.onInputChangeTask}>
                            </textarea>
                        </label>
                    </div>
                    <div className = 'outer'> 
                        <div className = 'MWDate'> 
                            <div>
                                <label  htmlFor = 'MWDate' >Дата задачи:</label> 
                            </div>
                            <div>
                                <input type = 'date' 
                                    id = 'MWDate' 
                                    name = 'dateTask'  
                                    value = {this.state.dateTask} onChange = {this.onInputChangeTask}/>
                            </div>                        
                        </div>
                        <div>
                            <label htmlFor = 'Group' >Группа:
                                <br/>                               
                                <select name = 'groupTask' 
                                    id = 'Group'  
                                    value = {this.state.groupTask} 
                                    onChange = {this.onInputChangeTask}>
                                    <option value = 'Выполнить'>Выполнить</option>
                                    <option value = 'Выполняется'>Выполняется</option>
                                    <option value = 'Выполнено'>Выполнено</option>
                                </select>
                            </label>
                        </div>
                                                                              
                    </div>
                    <div className = 'favorites'>
                        <input type = 'checkbox' 
                            checked = {this.state.favoriteTask} 
                            onChange = {this.changeFavoriteState}/>
                            В избранное
                    </div> 
                    <div className = 'footer-modal-window'>                      
                        <div >
                            <button 
                                className = 'button-add-task'
                                onClick = {this.editTask}>Редактировать</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}
}
function mapStateToProps(state){
    return {}
}

function matchStateToProps(dispatch){
    return bindActionCreators({editTask: editTask}, dispatch);
}


export default connect(mapStateToProps, matchStateToProps)(ModalWindow);

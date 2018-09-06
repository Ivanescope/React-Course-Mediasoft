import React, {Component} from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addTask from '../../action/addTask';


class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameTask: '',
      deskTask: '',
      groupTask: 'Выполнить',
      dateTask: '',
      favoriteTask: false
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.changeFavoriteTask = this.changeFavoriteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  //Изменение Local State
  onInputChange(e){
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }
  changeFavoriteTask(e){
    this.setState({favoriteTask: e.target.checked});
  }


  addTask(e){
    if(!this.state.nameTask.length < 1 && !this.state.deskTask.length < 1 && !this.state.dateTask.length < 1 ){
      e.preventDefault(); 
      let newTask = {
        id: new Date().getTime(),
        name: this.state.nameTask,
        description: this.state.deskTask,
        group: this.state.groupTask ,
        date: this.state.dateTask,
        favorite: this.state.favoriteTask,
        isDeleted:false
      }
      this.props.addTask(newTask)
      this.setState({
        nameTask: '',
        deskTask: '',
        groupTask: 'Выполнить',
        dateTask: '',
        favoriteTask: false
      });
    }
  }


  render(){
    return(
      <div>
        <form action = '#' method = 'post'>
          <fieldset className = 'form'>
            <legend>Добавить задачу</legend>
            <br/>
            <div>
              <label>Название задачи:  
                <input type = 'text' 
                  name = 'nameTask' 
                  required 
                  size = '25' 
                  value = {this.state.nameTask} 
                  onChange = {this.onInputChange}
                />
              </label>
            </div>
            <br/>
            <label>Описание: 
              <div>
                <textarea name = 'deskTask' 
                  rows = '3' 
                  cols = '30' 
                  required 
                  value = {this.state.deskTask} 
                  onChange = {this.onInputChange}>
                </textarea>
              </div>
            </label>
            <br/>
              <div> 
                <label >Дата задачи:
                  <div>
                    <input type = 'date' 
                      name = 'dateTask' 
                      required
                      value = {this.state.dateTask} 
                      onChange = {this.onInputChange}
                    />
                  </div>
                </label>
              </div>
              <br/>
              <div>
                <label >Группа:  
                  <div>                            
                    <select name = 'groupTask' 
                      value = {this.state.groupTask} 
                      onChange = {this.onInputChange}>
                        <option value = 'Выполнить'>Выполнить</option>
                        <option value = 'Выполняется'>Выполняется</option>
                        <option value = 'Выполнено'>Выполнено</option>
                    </select>
                  </div>
                </label>
              </div>
              <br/>
              <div>
              В важные
              <input type='checkbox' 
                checked = {this.state.favoriteTask}
                onChange = {this.changeFavoriteTask}
              /> 
              </div>
            <br/>
            <button type = 'submit' className = 'addTaskButton' onClick = {this.addTask}>Добавить задачу</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

function mapStateToProps() {
  return {};
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({addTask: addTask}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Form);

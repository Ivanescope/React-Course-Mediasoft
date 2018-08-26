import React, {Component} from 'react'
import './style.css'
import Task from '../Task'
import tasksImport from '../../Tasks'

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:tasksImport,
      filter:'Все задачи',
      newTaskName:'',
      newTaskDescription:'',
      newTaskGroup:'Выполнить',
      sort:false
    }
  }

filterTask = (e) => {
  this.setState({filter:e.target.innerHTML})
} 

deleteTask = (id) => {
  let arr = this.state.tasks.filter((task) => {
    return task.id !== id;
  });
  this.setState({tasks:arr});
  
}

showTasks = () => {
  return this.state.tasks.map((task) => {
    if(task.group === this.state.filter || this.state.filter === 'Все задачи'){
      return <Task key = {task.id} task = {task} deleteTask = {this.deleteTask}/>
    }
    return null;
  });
}



// Добавление новой задачи
addTask = (e) => {
  if(!this.state.newTaskName.length < 1 && !this.state.newTaskDescription.length < 1){
    e.preventDefault(); 
    let newTask = {
      id:(this.state.tasks.length)?(this.state.tasks.length):0,
      name:this.state.newTaskName,
      description:this.state.newTaskDescription,
      group:this.state.newTaskGroup
    }
  
    let arr = this.state.tasks;
    arr.push(newTask)
    this.setState({newTaskName:''});
    this.setState({newTaskDescription:''});
    this.setState({newTaskGroup:'Выполнить'});

  }
}
createNewTaskName = (e) => {
  this.setState({newTaskName:e.target.value});  
}
createNewTaskDescription = (e) => {
  this.setState({newTaskDescription:e.target.value});
}
createNewTaskGroup = (e) => {
  this.setState({newTaskGroup:e.target.value});
}


sortName = () => {
  this.setState((prevState) =>({
    sort:!prevState.sort
  }));
  let arr;
  if(this.state.sort){
    arr = this.state.tasks.sort((first, second) => {
      if(first.name.toLocaleLowerCase() > second.name.toLocaleLowerCase()){
        return 1;
      }
      if(first.name.toLocaleLowerCase() < second.name.toLocaleLowerCase()){
        return -1;
      }
      return null;
    });
  }
  else{
    arr = this.state.tasks.sort((first, second) => {
      if(first.name.toLocaleLowerCase() < second.name.toLocaleLowerCase()){
        return 1;
      }
      if(first.name.toLocaleLowerCase() > second.name.toLocaleLowerCase()){
        return -1;
      }
      return null;
    });
  }
  this.setState({tasks:arr});
}

  render(){
  return(
    <div>
        <header className = 'wrapperButtons'>
        <div className = 'button toDO' onClick = {this.filterTask}>Выполнить</div>
        <div className = 'button inProgress' onClick = {this.filterTask}>Выполняется</div>
        <div className = 'button done ' onClick = {this.filterTask}>Выполнено</div>
        <div className = 'button resetFilter ' onClick = {this.filterTask}>Все задачи</div>
      </header>
      <div className = "sort">
        <button className = "button buttonSort" onClick = {this.sortName} >Сортировка по названию </button>
        <div>{this.state.sort? 'Я-а':'A-я'}</div>
      </div>
      <article>
        <form action = '#' method = 'post'>
          <fieldset className = 'form'>
            <legend>Добавить задачу</legend>
            <div>
              <label>Название задачи:  
                <input type = "text" name = "nameTask" required size = "37" value = {this.state.newTaskName} onChange = {this.createNewTaskName}/>
              </label>
            </div>
            <label>Описание: 
              <div>
                <textarea name = "description" rows = "3" cols = "60" required value = {this.state.newTaskDescription} onChange = {this.createNewTaskDescription}></textarea>
              </div>
            </label>
            <div className = "outer">
              <div> 
                <label >Дата задачи:
                  <div>
                    <input type = "date" name = "dataTask" />
                  </div>
                </label>
              </div>
              <div>
                <label >Группа:  
                  <div>                            
                    <select name = "" value = {this.state.newTaskGroup} onChange = {this.createNewTaskGroup}>
                        <option value = "Выполнить">Выполнить</option>
                        <option value = "Выполняется">Выполняется</option>
                        <option value = "Выполнено">Выполнено</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
            <br/>
            <button type = "submit" className = "addTaskButton" onClick = {this.addTask}>Добавить задачу</button>
          </fieldset>
        </form>
        {this.showTasks()}
      </article>
    </div>
      
      )
  }
}

export default TaskList;

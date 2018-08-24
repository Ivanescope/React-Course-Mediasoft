import React, {Component} from 'react'
import './style.css'
import Task from '../Task'
import tasksImport from '../../Tasks'

class TaskList extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks:tasksImport
    }
  }



filterTask = (e) => {
  if(e.target.innerHTML === 'Все задачи'){
    this.setState({tasks:tasksImport})
  }else{
    let arrTask = tasksImport.filter((task) => {
      return task.group === e.target.innerHTML;
    })
    this.setState({tasks:arrTask})
  }
  
}


showTasks = () => {
  return this.state.tasks.map((task) => {
    return <Task key = {task.id} task = {task}/>
  });
}   

  render(){
  return(
    <div>
      <div className = 'wrapperButtons'>
        <div className = 'button toDO' onClick = {this.filterTask}>Выполнить</div>
        <div className = 'button inProgress' onClick = {this.filterTask}>Выполняется</div>
        <div className = 'button done ' onClick = {this.filterTask}>Выполнено</div>
        <div className = 'button resetFilter ' onClick = {this.filterTask}>Все задачи</div>
      </div>
      <article>
        {this.showTasks()}
      </article>
    </div>
      
      )
  }
}

export default TaskList;

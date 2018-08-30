import React, {Component} from 'react'
import './style.css'
import deleteButton from '../../image/basketDelete.png'
import { Link } from 'react-router-dom';

class Task extends Component {


  deleteTask = () => {
    this.props.deleteTask(this.props.task.id)
  }

    render(){
      const {name, description, group, id} = this.props.task;
      
    return(
        <article>
          <div className = 'taskItem'>
            <div className = 'taskName'><Link to = {{pathname: `/list/${id}`}}>{name}</Link></div>
            <div className = 'taskDescription'><i className = 'nameDescription'>
              Описание:</i> {description}            
            </div>
            <div className = 'taskGroup'><i className = 'nameGroup'>
              Статус:</i> {group}!
            </div>            
            <img src = {deleteButton} className = "deleteButton" alt = "Удалить задачу" onClick = {this.deleteTask}/>            
          </div>  
         
        </article>
        )
    }
}

export default Task;

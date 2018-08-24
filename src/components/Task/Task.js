import React, {Component} from 'react'
import './style.css'

class Task extends Component {

    render(){
      const {name, description, group} = this.props.task;
    return(
        <article>
          <div className = 'taskItem'>
            <div className = 'taskName'>{name}</div>
            <div className = 'taskDescription'><i className = 'nameDescription'>Описание:</i> {description}
            </div>
            <div className = 'taskGroup'><i className = 'nameGroup'>Статус:</i> {group}!</div>
          </div>  
        </article>
        )
    }
}

export default Task;

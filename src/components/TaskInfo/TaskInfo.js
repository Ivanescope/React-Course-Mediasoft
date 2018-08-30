import React, {Component} from "react";
import { Link } from "react-router-dom";
import Tasks from "../../Tasks";

class TaskInfo extends Component {
  
    render(){
        let task = Tasks[this.props.match.params.id];
    return(
        <article>
            <div><Link to = "/"> На главную</Link></div>
          <div className = 'taskItem'>
            <div className = 'taskName'>{task.name}</div>
            <div className = 'taskDescription'><i className = 'nameDescription'>
              Описание:</i> {task.description}            
            </div>
            <div className = 'taskGroup'><i className = 'nameGroup'>
              Статус:</i> {task.group}!
            </div>            
        </div> 
        </article>
        )
    }
  }
  
  export default TaskInfo;
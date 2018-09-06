import React, { Component } from 'react';
import './style.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import star from '../../style/star.png';


class Task extends Component {

  render() {
      const arrTask = this.props.tasks.filter(task => {
          return task.id === +this.props.match.params.id
      });
      const task = arrTask[0];
    return ( 
        <div>
            <Link to = '/'>
                <div className = 'text-to-main'>На главную</div>
            </Link>
            <div className = 'container-task-info' >
                <div className = 'header-task'>
                    <div>
                        {task.favorite ?
                            <img src = {star} className = 'star'alt = 'star' /> :
                            null
                        }
                    </div>
                    <div className = 'name-task'>{task.name}</div>
                    <div></div>
                </div>
                <div className = 'article-task'>
                    <div>   
                        <span className = 'name-desc'>Описание: </span>
                        {task.description}
                    </div>
                    <div className = 'footer-task'>
                        <div><span className = 'name-date'>Дата:</span>{task.date.split('-').reverse().join('/')}</div>
                        <div><span className = 'name-group'>Статус:</span>{task.group}</div>
                    </div>
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
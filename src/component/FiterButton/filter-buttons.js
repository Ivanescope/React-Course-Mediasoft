import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.css';
import sortAlphabet from '../../action/sortAlphabet';
import importantTasks from '../../action/importantTask';
import filterToDo from '../../action/filterToDo';
import filterIsProgress from '../../action/filterInProgress';
import filterDone from '../../action/filterDone';
import resetFilters from '../../action/resetFilters';


class HeaderCenter extends Component {
  constructor(props) {
    super(props);


    this.sortAlphabet = this.sortAlphabet.bind(this);
    this.showImportantTasks = this.showImportantTasks.bind(this);
    this.filterToDo = this.filterToDo.bind(this);
    this.filterIsProgress = this.filterIsProgress.bind(this);
    this.filterDone = this.filterDone.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
  }

  showImportantTasks(){
    this.props.importantTasks();
  }
  sortAlphabet(){
    this.props.sortAlphabet();

  }
  filterToDo(){
    this.props.filterToDo();
  }
  filterIsProgress(){
    this.props.filterIsProgress();
  }
  filterDone(){
    this.props.filterDone();
  }
  resetFilters(){
    this.props.resetFilters();
  }


  render() {
    return (
      <div className = 'container-filter'>
        <div className = 'first-line-filters'>
          <div className = 'button blue' onClick = {this.filterToDo}>Выполнить</div>
          <div className = 'button blue' onClick = {this.filterIsProgress}>Выполняется</div>
          <div className = 'button blue' onClick = {this.filterDone}>Выполнено</div>
        </div>
        <div className = 'second-line-filters'>
          <div className = 'button red' onClick = {this.sortAlphabet}>По алфавиту</div>
          <div className = 'button yellow' onClick = {this.showImportantTasks}>Важные</div>
          <div className = 'button ' onClick = {this.resetFilters}>Сбросить фильтры</div>
        </div>
      </div>      
    )
  }
}

function mapStateToProps() {
  return {};
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    sortAlphabet: sortAlphabet,
    importantTasks: importantTasks,
    filterToDo: filterToDo,
    filterIsProgress: filterIsProgress,
    filterDone: filterDone,
    resetFilters: resetFilters
  }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(HeaderCenter);

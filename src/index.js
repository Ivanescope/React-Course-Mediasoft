import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import TaskInfo from './components/TaskInfo';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path = '/' component = {TaskList}/>
            <Route exact path = '/list/:id' component = {TaskInfo}/>
        </div>
    </Router>,       
    document.getElementById('root')
);






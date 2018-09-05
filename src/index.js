import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import allReducers from './reducers';
import App from './component/App/App';
import SavedTasks from './component/SavedTasksList';
import TaskInfo from './component/TaskInfo';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <Switch>
                <Route exact path = '/' component = {App}/>
                <Route exact path = '/saveList' component = {SavedTasks}/>
                <Route exact path = '/task/:id' component = {TaskInfo}/>
            </Switch>    
        </Router>
    </Provider>,
    document.getElementById('root')
);
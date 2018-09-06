import { combineReducers } from 'redux';
import changeTasks from "./changeTasks";
import filtersTasks from './filtersTasks';

const allReducers = combineReducers({
    changeTasks,
    filtersTasks
});

export default allReducers;
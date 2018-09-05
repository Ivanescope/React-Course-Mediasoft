import { combineReducers } from "redux";
import tasks from "./tasks";

const allReducers = combineReducers({
    tasks
});

export default allReducers;
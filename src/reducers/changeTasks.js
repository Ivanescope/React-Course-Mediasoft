import initialState from "../Tasks";
import * as listConstants from './constants/constants';


const ACTION_HANDLERS = {
    [listConstants.ADD_TASK]: (state, action) => {
        const nextState = Object.assign({},state);
        nextState.allTasks = state.allTasks.slice();
        nextState.allTasks.push(action.payload)
        return nextState;
    },
    [listConstants.DELETE_TASK]: (state, action) => {
        return {
            ...state,
            allTasks:state.allTasks.filter((task) => {
                return task !== action.payload
            })   
        }
    },
    [listConstants.TRANSFER_TASK]: (state, action) => {
        return {
            ...state,
            allTasks:state.allTasks.map((task) => {
                if(task === action.payload){
                    task.isDeleted = true;
                }
                return task 
            }) 
        }
    },
    [listConstants.REESTABLISH_TASK]: (state, action) => {
        return {
            ...state,
            allTasks:state.allTasks.map((task) => {
                if(task === action.payload){
                    task.isDeleted = false;
                }
                return task 
            }) 
        }
    },
    [listConstants.EDIT_TASK]: (state, action) => {
        return {
            ...state,
            allTasks : state.allTasks.map((task) => {
                if(task.id === action.payload.id){
                    return action.payload;
                }
                return task;
            })
        }
    }
};


export default function(state = initialState, action){
    if (action ){
        return ACTION_HANDLERS[action.type] ?
        ACTION_HANDLERS[action.type](state, action) :
        state;
    } 
    return state;
};


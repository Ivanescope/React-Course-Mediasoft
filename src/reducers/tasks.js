import tasksData from "../Tasks";



// import listConstants from './constants';

// const ACTION_HANDLERS = {
// [listConstants.ADD_ITEM]: (state, action) => {
//     return [...state, action.payload];
// }
// };


// export default function(state = tasksData, action){
// if (action ){
//     return ACTION_HANDLERS[action.type] ?
//     ACTION_HANDLERS[action.type](state, action) :
//     state;
// } 
// return state;
// };















export default function(state = tasksData,action){

    switch(action.type ){

        case 'ADD_TASK':
            const nextState = Object.assign({},state);
            nextState.allTasks = state.allTasks.slice();
            nextState.allTasks.push(action.payload)
            return nextState;

        case 'DELETE_TASK':
            return {
                ...state,
                savedTasks:state.savedTasks.filter((task) => {
                    return task !== action.payload
                })   
            } 

        case 'TRANSFER_TASK':
            const newState  = {
                ...state,
                allTasks:state.allTasks.filter((task) => {
                    return task !== action.payload
                }) 
            } 
            newState.savedTasks.push(action.payload)
            return newState;

        case 'REESTABLISH_TASK':
            const stateNew = {
                ...state,
                savedTasks:state.savedTasks.filter((task) => {
                    return task !== action.payload
                }) 
            } 
            stateNew.allTasks.push(action.payload)
            return stateNew;
    
        
        case 'EDIT_TASK':
            return {
                ...state,
                allTasks : state.allTasks.map((task) => {
                    if(task.id === action.payload.id){
                        return action.payload;
                    }
                    return task;
                })
            }










        case 'SORT_ALPHABET':
            const newStateOne =  Object.assign({},state);
            newStateOne.allTasks = state.allTasks.slice();
            newStateOne.allTasks.sort((first, second) => {
                if(first.name.toLocaleLowerCase() > second.name.toLocaleLowerCase()){
                    return 1;
                } 
                return -1;
            })
            return newStateOne;



        case 'IMPORTANT_TASKS':
            const newStateTwo =  Object.assign({},state);
            newStateTwo.allTasks = state.allTasks.slice();
            newStateTwo.allTasks.sort(prevTask => {
                    if(!prevTask.favorite) return 1;
                    return -1;
                });
            return newStateTwo;    
        case 'FILTER_TO_DO':
            return {
                ...state,
                allTasks:state.allTasks.filter((task) => {
                    return task.group === 'Выполнить'
                })   
            } 
        case 'FILTER_IS_PROPGRESS':
            return {
                ...state,
                allTasks:state.allTasks.filter((task) => {
                    return task.group === 'Выполняется'
                })   
            } 
        case 'FILTER_DONE':
            return {
                ...state,
                allTasks:state.allTasks.filter((task) => {
                    return task.group === 'Выполнено'
                })   
            } 



        default:
        return state
    }
}
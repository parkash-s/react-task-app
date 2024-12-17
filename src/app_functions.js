import React, {useContext, useReducer} from "react";
import { TaskDispatchContext } from "./AppTasksContext";
import AppReducer from "./AppReducer";
import { initialState } from "./InitialStates";

function getNewStateAndDispatch(AppReducer,initialState){
    const [newTasks, dispatch] = useReducer(AppReducer, initialState);
    return [newTasks, dispatch];
}

// This function returns dispatch from provided context.
function getDispatch(){
    const dispatch = useContext(TaskDispatchContext);
    return dispatch;
}

// This function returns action object for task Add.
function action_add(inputText,nextId){
    return {
        type:"add",
        id:nextId,
        work:inputText,
    }; 
}

// This function use dispatch and another function with other parameters
// to dispatch action.
function add_single_task(dispatch,action_add,inputText,nextId){
    dispatch(action_add(inputText,nextId));
}


export {getNewStateAndDispatch, action_add, getDispatch, add_single_task}
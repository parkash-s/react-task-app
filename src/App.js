import React,{useState} from "react";
import FunctionalComponent from "./functionalComponent";
import AppTasksContext from "./AppTasksContext";
import AppReducer from "./AppReducer";
import { initialState } from "./InitialStates";
import {getNewStateAndDispatch} from "./app_functions";


const App = ()=>{ 
    const [newTasks, dispatch] = getNewStateAndDispatch(AppReducer,initialState);
    return(
        <AppTasksContext
            newTasks={newTasks}
            dispatch={dispatch}
        >
            <div className="container col-6">
                <FunctionalComponent/>
            </div>
        </AppTasksContext>
    )
}

export default App;
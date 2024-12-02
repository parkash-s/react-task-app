import React,{useState} from "react";
import FunctionalComponent from "./functionalComponent";
import AppTasksContext from "./AppTasksContext";
import CustomComponent from "./CustomComponent";
import AppReducer from "./AppReducer";
import { initialState } from "./InitialStates";

const App = ()=>{  
    return(
        <AppTasksContext initialState={initialState} AppReducer={AppReducer}>
            <div className="container col-6">
                <FunctionalComponent/>
            </div>
         </AppTasksContext>
    )
}

export default App;
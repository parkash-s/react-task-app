import React,{useState} from "react";
import FunctionalComponent from "./functionalComponent";
import AppTasksContext from "./AppTasksContext";
const App = ()=>{
    
    return(
        <AppTasksContext>
            <div className="container col-6">
                <FunctionalComponent/>
            </div>
        </AppTasksContext>
    )
}

export default App;
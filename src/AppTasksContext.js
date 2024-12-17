import React,{ createContext, useReducer } from "react";
export const TasksContext = createContext(null);
export const TaskDispatchContext = createContext(null);




function AppTasksContext({children, newTasks, dispatch}){
    // console.info(newTasks,"===============");
        return (
            <TasksContext.Provider value={newTasks}>
                <TaskDispatchContext.Provider value={dispatch}>
                    {children}
                </TaskDispatchContext.Provider>
            </TasksContext.Provider>
            );
}

export default AppTasksContext
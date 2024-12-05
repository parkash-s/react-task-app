import React,{ createContext, useReducer } from "react";
export const TasksContext = createContext(null);
export const TaskDispatchContext = createContext(null);



function AppTasksContext({children, AppReducer, initialState}){
    
    const [newTasks, dispatch] = useReducer(AppReducer, initialState);
        return (
            <TasksContext.Provider value={newTasks}>
                <TaskDispatchContext.Provider value={dispatch}>
                    {children}
                </TaskDispatchContext.Provider>
            </TasksContext.Provider>
            );
}

export default AppTasksContext
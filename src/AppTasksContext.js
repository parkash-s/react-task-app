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

// function AppReducer(tasks, action){
//     console.info("App REducer");
//     switch (action.type){
//         case "add":{
//            return [
//                     ...tasks,
//                     {
//                         id:action.id,
//                         work:action.work,
//                         done:false,
//                         update:false
//                     },
//                   ];
//         }

//         case "delete": {
//             return tasks.filter((item)=>{
//                         return item.id !== action.id
//                     })
//         }

//         case "update": {
//             return tasks.map((item)=>{
//                 if(item.id === action.id){
//                     return {
//                         ...item,
//                         done:action.done,
//                     }
//                 }else{
//                     return item;
//                 }
//         })
//     }

//         case "open update input":{
//             return tasks.map((item)=>{
//                 if(item.id === action.id){
//                    return {
//                     ...item,
//                     update:action.update
//                    }
//                 }else{
//                    return item;
//                 }
//             }
//         )
//     }

//         case "complete update":{
//             return tasks.map((item)=>{
//                 if(item.id === action.id){
//                     return {
//                         ...item,
//                         work:action.work,
//                         update:action.update
//                     };
//                  }else{
//                     return item;
//                  } 
//             })
//         }

//         default : {
//             throw Error("unknown action: "+ action.type);
//         }
//     }
// }


// const initialState = [
//     { 
//          id:0, 
//          work:'I need to start workout on daily basis.',
//          done:false,
//          update:false
//      }, 
//      { 
//          id:1, 
//          work:'I have to start practicing driving a car.',
//          done:false,
//          update:false
//      }, 
//      { 
//          id:2, 
//          work:'I have to get a driving licence.',
//          done:false,
//          update:false
//      }
//  ]
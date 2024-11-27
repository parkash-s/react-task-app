import React,{useState, useReducer, useDeferredValue, useContext} from "react";
import UserForm from "./UserForm";
import AppReducer from "./appReducer";
import AppTasksContext from "./AppTasksContext";
import { TasksContext } from "./AppTasksContext";
import { TaskDispatchContext } from "./AppTasksContext";



const FunctionalComponent = ()=>{
    const [inputText, setInputText] = useState('enter text');
    // const newTasks = useContext(TasksContext);
    // const dispatch = useContext(TaskDispatchContext);

    const handleInput = (e)=>{
        setInputText(e.target.value);
    }
    

    // const handleAddTask = () => {
    //     {inputText !== '' && 
    //         dispatch({
    //                 type:"add",
    //                 id:nextId++,
    //                 work:inputText,
    //             });
    //     }
    //     setInputText('');
    // }

    // const checkBoxChange = (changedItem) => {
    //     dispatch({
    //         type:"update",
    //         changedItem:changedItem
    //     });
    // }

    // const handleDelete = (deletedItemID)=>{
    //     dispatch({
    //         type:'delete',
    //         id:deletedItemID
    //     })
    // }

    // const handleUpdate = (changedUpdate)=>{
    //     dispatch({
    //         type:"open update input",
    //         changedUpdate:changedUpdate
    //     })
    // }


    // const handleCompleteUpdate = (updateTask)=>{    
    //     dispatch({
    //         type:"complete update",
    //         updateTask:updateTask
    //     })
    // }

    return (
        <>

            <AppTasksContext>
                <UserForm
                    inputText={inputText}
                    // newTasks={newTasks}
                    handleInput={handleInput}
                    // handleAddTask={handleAddTask}
                    // checkBoxChange={checkBoxChange}
                    // handleDelete={handleDelete}
                    // handleUpdate={handleUpdate}   
                    // handleCompleteUpdate={handleCompleteUpdate}
                />
            </AppTasksContext>
        </>
    )
}

export default FunctionalComponent;
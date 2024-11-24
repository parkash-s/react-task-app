import React,{useState, useReducer, useDeferredValue} from "react";
import UserForm from "./UserForm";
import { initialState } from "./initialStates";
import AppReducer from "./appReducer";

let nextId = 4;

const FunctionalComponent = ()=>{
    const [inputText, setInputText] = useState('enter text');
    // const [task, setTask] = useState(initialState);
    const [tasks, dispatch] = useReducer(AppReducer, initialState);
    const deferedText = useDeferredValue(tasks);

    const handleInput = (e)=>{
        setInputText(e.target.value);
    }
    

    const handleAddTask = () => {
        {inputText !== '' && 
            dispatch({
                    type:"add",
                    id:nextId++,
                    work:inputText,
                });
        }
        setInputText('');
    }

    const checkBoxChange = (changedItem) => {
        dispatch({
            type:"update",
            changedItem:changedItem
        });
    }

    const handleDelete = (deletedItemID)=>{
        dispatch({
            type:'delete',
            id:deletedItemID
        })
    }

    const handleUpdate = (changedUpdate)=>{
        dispatch({
            type:"open update input",
            changedUpdate:changedUpdate
        })
    }


    const handleCompleteUpdate = (updateTask)=>{    
        dispatch({
            type:"complete update",
            updateTask:updateTask
        })
    }

    return (
        <UserForm
            inputText={inputText}
            deferedText={deferedText}
            handleInput={handleInput}
            handleAddTask={handleAddTask}
            checkBoxChange={checkBoxChange}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}   
            handleCompleteUpdate={handleCompleteUpdate}
        />
    )
}

export default FunctionalComponent;
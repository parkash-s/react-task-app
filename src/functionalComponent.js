import React,{useState, useReducer, useDeferredValue, useContext} from "react";
import UserForm from "./UserForm";
import AppTasksContext from "./AppTasksContext";



const FunctionalComponent = ()=>{
    const [inputText, setInputText] = useState('enter text');

    const handleInput = (e)=>{
        setInputText(e.target.value);
    }
    
    return (
        <>
            <AppTasksContext>
                <UserForm
                    inputText={inputText}
                    handleInput={handleInput}
                />
            </AppTasksContext>
        </>
    )
}

export default FunctionalComponent;
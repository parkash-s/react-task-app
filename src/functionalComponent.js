import React,{useState, useDeferredValue} from "react";
import UserForm from "./UserForm";

let nextId = 4;
let initialState = [
    { 
         id:0, 
         work:'I need to start workout on daily basis.',
         done:false,
         update:false
     }, 
     { 
         id:1, 
         work:'I have to start practicing driving a car.',
         done:false,
         update:false
     }, 
     { 
         id:2, 
         work:'I have to get a driving licence.',
         done:false,
         update:false
     }
 ]

const FunctionalComponent = ()=>{
    const [inputText, setInputText] = useState('enter text');
    const [task, setTask] = useState(initialState);
    const deferedText = useDeferredValue(task);

    const handleInput = (e)=>{
        setInputText(e.target.value);
    }
    

    const handleAddTask = () => {
        {inputText !== '' && 
            setTask([
                ...task,
                {
                    id:nextId++,
                    work:inputText,
                    done:false,
                    update:false
                }
            ]);
        }
        setInputText('');
    }

    const checkBoxChange = (changedItem) => {
       setTask(task.map((item)=>{
            if(item.id === changedItem.id){
                return changedItem;
            }else{
                return item;
            }
        }))
    }

    const handleDelete = (deletedItem)=>{
        setTask(task.filter((item)=>{
            if(item.id !== deletedItem){
                return item;
            }
        }))
    }

    const handleUpdate = (changedUpdate)=>{
        setTask(task.map((item)=>{
            if(item.id === changedUpdate.id){
               return changedUpdate;
            }else{
               return item;
            }
        }
    ))
    }


    const handleCompleteUpdate = (updateTask)=>{    
        setTask(task.map((item)=>{
            if(item.id === updateTask.id){
                return updateTask;
             }else{
                return item;
             } 
        }))
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
import React,{useState} from "react";
import Button from "./buttonComponent.js";
import Input from "./formInput.js";

let nextId = 4;
const AddTask = ({add_single_task, dispatch,action_add})=>{
    const [inputText, setInputText] = useState('enter text');
    const handleInput = (e)=>{
        setInputText(e.target.value);
    }
    return (
            <form method="post"  className="userForm d-flex flex-column mt-5 mb-4">
                <label>
                        <Input 
                            type="text"
                            name="searchText"
                            handleInput={handleInput}
                            inputVal={inputText}
                        />
                </label>
                <div className="d-flex justify-content-end">
                    <label className="p-2 pe-0">        
                        <Button
                                type="button"
                                className="btn btn-success btn-sm"
                                name="Add_tasks"
                                dataRole="buttonToAddSingleTask"
                                Children="Add tasks"
                                clickMe={()=>{
                                    inputText !== '' &&
                                    add_single_task(dispatch,action_add,nextId,inputText)
                                }
                            }
                        />
                    </label>
                </div>
            </form>
            )
}

export default AddTask;
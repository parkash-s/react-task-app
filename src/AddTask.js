import React,{useState, useRef} from "react";
import Button from "./buttonComponent.js";
// import Input from "./formInput.js";


const AddTask = ({add_single_task, dispatch, action_add})=>{  
    const inputRef = useRef('');
    const myRef = useRef(2);
    
    return (
                <form method="post"  className="userForm d-flex flex-column mt-5 mb-4">
                    <label>
                            <input 
                                type="text"
                                name="searchText"
                                placeholder="Enter text"
                                defaultValue={inputRef.current.value}
                                ref={inputRef}
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
                                        const nextId = myRef.current+=1;
                                        if(inputRef.current.value !== ''){
                                            add_single_task(dispatch,action_add,inputRef.current.value,nextId)
                                        }
                                    }
                                }
                            />
                        </label>
                    </div>
                </form>
            )
}

export default AddTask;
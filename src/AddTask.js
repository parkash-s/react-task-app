import React,{useState, useRef} from "react";
import Button from "./buttonComponent.js";
import Input from "./formInput.js";


const AddTask = ({add_single_task, dispatch, action_add})=>{ 
    const [inptVal, setInptval] = useState('');
    const inputRef = useRef('');
    const myRef = useRef(2);
    console.info("Add Task.........");
    const onchange = (e)=>{
        setInptval(e.target.value);
    }
    return (
                <form method="post"  className="userForm d-flex flex-column mt-5 mb-4">
                    <label>
                            <Input 
                                type="text"
                                name="searchText"
                                id="addTsk"
                                placeholder="Enter text"
                                // defaultValue={inputRef.current.value}
                                // ref={inputRef}
                                value={inptVal}
                                onchange={onchange}
                            />
                    </label>
                    <div className="d-flex justify-content-end">
                        <label className="p-2 pe-0">        
                            <Button
                                    type="button"
                                    className="btn btn-success btn-sm"
                                    name="Add_tasks"
                                    dataTestId="buttonToAddSingleTask"
                                    Children="Add tasks"
                                    clickMe={()=>{
                                        const nextId = myRef.current+=1;
                                        if(inptVal !== ''){
                                            add_single_task(dispatch,action_add,inptVal,nextId);
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
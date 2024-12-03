import React, {useContext,useState} from "react";
import AddTask from "./AddTask.js";
// import Button from "./buttonComponent.js";
// import Input from "./formInput.js";
import WorkList from "./workList.js";
// import { TaskDispatchContext } from "./AppTasksContext.js";
import {action_add, getDispatch, add_single_task} from "./app_functions.js";

const UserForm = ()=>{
    const dispatch = getDispatch();
    // const [inputText, setInputText] = useState('enter text');
    // const handleInput = (e)=>{
    //     setInputText(e.target.value);
    // }
    console.info("rendered");
    return (
        <> 
                <AddTask
                    add_single_task = {add_single_task} 
                    dispatch = {dispatch} 
                    action_add = {action_add}
                />
                {/* <form method="post"  className="userForm d-flex flex-column mt-5 mb-4">
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
                </form> */}
                
                <WorkList />   
                
        </>
    );
}

export default UserForm;

import React, {useContext} from "react";
import Button from "./buttonComponent.js";
import Input from "./formInput.js";
import WorkList from "./workList.js";
import AppTasksContext from "./AppTasksContext.js";
import { TasksContext } from "./AppTasksContext.js";
import { TaskDispatchContext } from "./AppTasksContext.js";

let nextId = 4;

const UserForm = ({inputText, handleInput})=>{
    const dispatch = useContext(TaskDispatchContext);
    // const newTasks = useContext(TasksContext);
    return (
        <> 
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
                                        Children="Add tasks"
                                        clickMe={()=>{
                                            inputText !== '' &&
                                                dispatch({
                                                    type:"add",
                                                    id:nextId++,
                                                    work:inputText,
                                                });
                                        }}
                                />
                        </label>
                    </div>
                </form>
                
                    <WorkList 
                        // Usertask={newTasks} 
                        // checkBoxChange={checkBoxChange}
                        // handleDelete={handleDelete}
                        // handleUpdate={handleUpdate}
                        // handleCompleteUpdate={handleCompleteUpdate}
                    />   
                
        </>
    );
}

export default UserForm;

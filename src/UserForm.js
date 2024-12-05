import React from "react";
import AddTask from "./AddTask.js";
import WorkList from "./workList.js";
import {action_add, getDispatch, add_single_task} from "./app_functions.js";

const UserForm = ()=>{
    
    const dispatch = getDispatch();
    return (
                <> 
                    <AddTask
                        add_single_task = {add_single_task} 
                        dispatch = {dispatch} 
                        action_add = {action_add}
                        // nextId = {nextId}
                    />
                    <WorkList />               
                </>
            );
}

export default UserForm;

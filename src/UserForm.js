import React, {useContext,useState} from "react";
import Button from "./buttonComponent.js";
import Input from "./formInput.js";
import WorkList from "./workList.js";
import { TaskDispatchContext } from "./AppTasksContext.js";

let nextId = 4;

const UserForm = ()=>{
    const dispatch = useContext(TaskDispatchContext);
    const [inputText, setInputText] = useState('enter text');

    const handleInput = (e)=>{
        setInputText(e.target.value);
    }

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
                
                <WorkList />   
                
        </>
    );
}

export default UserForm;

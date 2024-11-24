import React from "react";
import Button from "./buttonComponent.js";
import Input from "./formInput.js";
import WorkList from "./workList.js";


const UserForm = ({inputText, deferedText, handleInput,  handleAddTask, checkBoxChange, handleDelete, handleUpdate, handleCompleteUpdate})=>{
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
                                        clickMe={handleAddTask}
                                />
                        </label>
                    </div>
                </form>
                <WorkList 
                    Usertask={deferedText} 
                    checkBoxChange={checkBoxChange}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                    handleCompleteUpdate={handleCompleteUpdate}
                />   
                  
        </>
    );
}

export default UserForm;

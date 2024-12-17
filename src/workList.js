import React,{useRef, useContext, useState} from "react";
import { TaskDispatchContext, TasksContext } from "./AppTasksContext";

const WorkList = ()=>{
    const myRef = useRef('');
    const dispatch = useContext(TaskDispatchContext);
    const Usertask = useContext(TasksContext);

    return (
        <ul className="list-group">
           {Usertask.map((item,index)=>{
                return (
                <li data-testid="li-element" key={item.id} className="list-group-item d-flex justify-content-between pe-2">
                    <div className="col-9 d-flex justify-content-start align-items-center">
                        <span className="inline-block p-2 pe-3 fw-bold">{index+1}.</span>
                        <label>
                            <input 
                                type="checkbox" 
                                name="workDone"
                                role={"inputCheckBox"+index} 
                                checked={item.done}
                                onChange={(e)=>{
                                    dispatch({
                                        type:"update",
                                        id:item.id,
                                        done:e.target.checked
                                    });
                                }}
                                />
                            </label>
                            {
                             !item.update ?
                             <span 
                                className="inline-block p-2 text-break"
                                data-testid={"workList"+index}
                             >
                             {item.work}
                             </span> : 
                             (<>
                             <input type="text" 
                             ref={myRef}
                             data-testid={"textBoxToUpdate"+index}
                             defaultValue={item.work} 
                             className="ms-2"
                             />
                             <button 
                             className="btn btn-success ms-2 btn-sm fw-bold"
                             data-testid={"buttonToCompleteUpdate"+index}
                             onClick={()=>{
                                dispatch({
                                    type:"complete update",
                                    id:item.id,
                                    work:myRef.current.value,
                                    update:false

                                })
                            }}>
                                complete update
                             </button>
                             </>)
                            }
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <button 
                            className="btn btn-sm btn-success me-2"
                            data-testid={"buttonToDelete"+index}
                            onClick={
                                ()=>{
                                    dispatch({
                                        type:"delete",
                                        id:item.id
                                    })
                                }
                            }
                        >Delete</button>
                        <button 
                            className="btn btn-sm btn-warning"
                            data-testid={"buttonToOpenUpdateCheckbox"+index}
                            onClick={
                                ()=>{ 
                                    dispatch({
                                        type:"open update input",
                                        id:item.id,
                                        update:true
                                    });
                                }
                            }
                        >Update</button>
                    </div>
                </li>
                )
           })} 
        </ul>
    )
}

export default WorkList;
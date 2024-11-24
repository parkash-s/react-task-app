import React,{useRef} from "react";

const WorkList = ({Usertask, checkBoxChange, handleDelete, handleUpdate, handleCompleteUpdate})=>{
    const myRef = useRef('');

    return (
        <ul className="list-group">
           {Usertask.map((item,index)=>{
                return (
                <li key={item.id} className="list-group-item d-flex justify-content-between pe-2">
                    <div className="col-9 d-flex justify-content-start align-items-center">
                        <span className="inline-block p-2 pe-3 fw-bold">{index+1}.</span>
                        <label>
                            <input 
                                type="checkbox" 
                                name="workDone" 
                                checked={item.done}
                                onChange={(e)=>{
                                checkBoxChange({
                                    ...item,
                                    done:e.target.checked
                                    });
                                }}
                                />
                            </label>
                            {
                             !item.update ?
                             <span className="inline-block p-2 text-break">
                             {item.work}
                             </span> : 
                             (<>
                             <input type="text" 
                             ref={myRef}
                             defaultValue={item.work} 
                             className="ms-2"
                             />
                             <button 
                             className="btn btn-success ms-2 btn-sm fw-bold"
                             onClick={()=>{
                                handleCompleteUpdate({
                                    ...item,
                                    work:myRef.current.value,
                                    update:false
                                    })
                                }
                            }>
                                complete update
                             </button>
                             </>)
                            }
                    </div>
                    <div className="col-3 d-flex justify-content-end">
                        <button 
                            className="btn btn-sm btn-success me-2"
                            onClick={
                                ()=>{
                                    handleDelete(item.id)
                                }
                            }
                        >Delete</button>
                        <button 
                            className="btn btn-sm btn-warning"
                            onClick={
                                ()=>{
                                    handleUpdate({
                                        ...item,
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
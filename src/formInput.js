import React from "react";

const Input = (props)=>{
    return (
        <input 
            type={props.type} 
            name={props.name} 
            id={props.id}
            placeholder={props.placeholder}
            // defaultValue={props.defaultValue}
            // ref={ref}
            onChange={props.onchange}
            value={props.value}
            className="form-control"
            data-testid="input_ele"
        />
    );
}

export default Input;
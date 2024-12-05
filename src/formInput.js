import React from "react";

const Input = ({type,name,placeholder,handleInput,defaultValue,ref})=>{
    return (
        <input 
            type={type} 
            name={name} 
            placeholder={placeholder}
            ref={ref}
            defaultValue={defaultValue}
            className="form-control"
            data-testid="input_ele"
        />
    );
}

export default Input;
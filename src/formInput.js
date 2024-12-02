import React from "react";

const Input = ({type,name,inputVal,handleInput})=>{
    return (
        <input 
            type={type} 
            name={name} 
            onChange={handleInput} 
            value={inputVal}
            className="form-control"
            data-testid="input_ele"
        />
    );
}

export default Input;
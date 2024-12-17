import React,{useState } from "react";
const Button = function({type,name,dataTestId,className,Children,clickMe}){
    return(
        <button 
        type={type} 
        name={name} 
        data-testid={dataTestId}
        className={className}
        onClick={clickMe}>
            {Children}
        </button>
    )
}


export default Button;
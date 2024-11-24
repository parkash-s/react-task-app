import React,{useState } from "react";
const Button = function({type,name,className,Children,clickMe}){
    return(
        <button 
        type={type} 
        name={name} 
        className={className}
        onClick={clickMe}>
            {Children}
        </button>
    )
}


export default Button;
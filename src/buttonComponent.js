import React,{useState } from "react";
const Button = function({type,name,dataRole,className,Children,clickMe}){
    return(
        <button 
        type={type} 
        name={name} 
        data-role={dataRole}
        className={className}
        onClick={clickMe}>
            {Children}
        </button>
    )
}


export default Button;
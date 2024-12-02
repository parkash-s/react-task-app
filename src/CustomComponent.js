import React,{useState} from "react";

const CustomComponent = ()=>{
    const [eName, setEname] = useState('anonymous');

    const handleClick = (e)=>{
        setEname("A button clicked!");
    }
    // console.info("rendered");
    return (
        <>  
            {<h1 data-testid="hding">{eName}</h1>}
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default CustomComponent;
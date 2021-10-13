import React, { useState } from "react"
export const Test = () =>{
    const [count,setCount] = useState(0);

 function Handle(){

   
    setCount(count+1);
    

 }   

    return ( 
        
        <button onClick={Handle}>{count}</button>
        

);


}
import React from 'react';
import { useRef } from "react";
import "./Style.css";

function ButtonRef() {
    const countRef = useRef(0);

    const handle = () => {
      countRef.current++;
      console.log(`Clicked ${countRef.current} times`);
    };
  
    document.write("I rendered!");
    return (
        <>
         <button class="button1" onClick={handle}>Click me</button> 

        </>
    )
}

export default ButtonRef


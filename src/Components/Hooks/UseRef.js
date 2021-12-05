import React, { useState,useRef } from 'react';


function UseRef_hook() {
    const name = useRef(null);
    const [show,setshow] = useState(false);


 const submit = (e) => {
   e.preventDefault();
   const Name = name.current.value;
   Name === "" ? alert("Please Fill the Form") : setshow(true);
 }
    return (
        <>
      <form action="" onSubmit={submit}>
        <input type="text" ref={name} />
        <button>submit</button>
        </form>
        <p style={{fontSize:"20px",marginTop:"20px"}} >{show ? `Hello ${name.current.value}` : ""}</p>
            
        </>
    )
}

export default UseRef_hook

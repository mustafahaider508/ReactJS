import React,{useEffect, useState} from 'react';

function UseEffect_Hook() {
    const [value,setvalue] = useState(0);

    useEffect(() => {
        document.title = `Chats(${value})`
    })

    
    return (
        <>
      <div className="center_div">
        <p>{value}</p>
        <div class="button2" onClick={() => {
         return(
           setvalue(value + 1)
         )
        }} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={() => {
            
              if(value > 0){
                setvalue(value - 1)
              } else {
                setvalue(0)
              }
            
            
           }} 
          >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
        </>
    )
}

export default UseEffect_Hook

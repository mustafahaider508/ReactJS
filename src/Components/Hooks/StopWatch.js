import React, { useEffect, useReducer,useRef } from 'react';
import "./Style.css";

function reducer(state, action) {
    switch (action.type) {
      case "start":
        return { ...state, isRunning: true };
      case "stop":
        return { ...state, isRunning: false };
      case "reset":
        return { isRunning: false, time: 0 };
      case "tick":
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }
  

function StopWatch() {
 const initialState = {isRunning:false,time:0,}
     const [state, dispatch] = useReducer(reducer, initialState);
     const idRef = useRef(0);

     useEffect(() => {
        if (!state.isRunning) {
          return;
        }
        idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);
        return () => {
          clearInterval(idRef.current);
          idRef.current = 0;
        };
      }, [state.isRunning]);
    
     
    return (
        <>
        <div className="center_div">
        <p>  {state.time}s</p>
        <div class="button2" onClick={() => dispatch({type:"start"})} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          START
        </div>
        <div
          class="button2" onClick={() => dispatch({type:"stop"})}
            
          
          >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
           STOP
        </div>

        <div
          class="button2" onClick={() => dispatch({type:"reset"})}
            
          
          >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
           RESET
        </div>
      </div>
            
        </>
    )
}

export default StopWatch





import React,{useReducer} from 'react';
import "./Style.css";

const reducer = (state,action) => {
     if(action.type === "on"){
         state = "https://o.remove.bg/downloads/8caf168c-3be8-4778-942b-34aaa5bfda30/images-removebg-preview.png"
     }
     if(action.type === "off"){
        state = "https://o.remove.bg/downloads/d60f226d-b0b6-4122-92b2-5fbbe1c96c92/off-removebg-preview.png " 
    }
     return state;
}


function Room() {
    const initialState = "https://o.remove.bg/downloads/d60f226d-b0b6-4122-92b2-5fbbe1c96c92/off-removebg-preview.png";

   
    
    const [state, dispatch] = useReducer( reducer, initialState)
    return (
        <>
        
        <div className="center_div">

            <img style={{width:"350px"}} src={state} />
            <p ></p>
        <div class="button2" onClick={() => dispatch({type:"on"})}  >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          ON
        </div>

        <div class="button2" onClick={() => dispatch({type:"off"})}  >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          OFF
        </div>
        </div>

        </>
    )
}

export default Room

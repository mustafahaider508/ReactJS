import React,{useReducer} from 'react';
import './Style.css';


const reducer = (state,action) => {
    if(action.type === 'INCR') {
        state = state + 1;
    }
    if(state > 0 && action.type === 'DEC') {
        state = state - 1;
    }
 return state;
}

function UseReducer_Hook() {
    const initialState = 10;
    const [state, dispatch] = useReducer(reducer, initialState)

   
    return (
        <>
         <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={() => dispatch({type:'INCR'})}
          >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2" onClick={() => dispatch({type:'DEC'})} >
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

export default UseReducer_Hook


import React, { useState, useEffect } from "react";
import "./Todo.css";


// get local Storage Data
const getLocalData = () => {
   const lists = localStorage.getItem("todoList")

   if (lists){
     return JSON.parse(lists)
   }else {
     return []
   }
  
}


const Todo = () => {
  const [inputData,setinputData]  = useState("");
  const [itemsave,setitemsave] = useState(getLocalData());
  const [isEditItem,setisEditItem] = useState("");
  const [togglebtn, settogglebtn] = useState(false);
  
   const addItems = () => {
     if(!inputData) {
       alert("Please fill the Form!");
     } else if(inputData && togglebtn){
      setitemsave(
        itemsave.map((curElm) => {
          if(curElm.id === isEditItem) {
            return{...curElm,name:inputData}
          }
          return curElm;
        })
        
      );
      setinputData("");
      setisEditItem(null);
      settogglebtn(false);

     } else{
       const UpdateinputData = {
         id : new Date().getTime().toString(),
         name : inputData
       }
      setitemsave([...itemsave, UpdateinputData]);
      setinputData("");
      
     }
   }
   console.log(itemsave);
// delete all items
   const deleteItem = (index) => {
     const updateItems = itemsave.filter((curElm) => {
         return curElm.id !== index;
     })
     setitemsave(updateItems);
   }

  //Edit items 
  const editItem = (index) => {
     const edit_Items = itemsave.find((curElm) => {
       return curElm.id === index;
     })
     setinputData(edit_Items.name);
     setisEditItem(index);
     settogglebtn(true);

  }


//  remove all items
   const removeItems = () => {
    setitemsave([]);
   }
  //  adding data to local Storage
   useEffect(() => {
     localStorage.setItem("todoList",JSON.stringify(itemsave))

   },[itemsave])
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
           
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(event) => setinputData(event.target.value)}
              />

         {togglebtn ? 
         <i className="far fa-edit add-btn" onClick={addItems} ></i> 
         :
        <i className="fa fa-plus add-btn" onClick={addItems} ></i> 
         }
         
         
            
          </div>
          {/* show our items  */}
          <div className="showItems">
          {itemsave.map((curElm) => {
            return(
              <div className="eachItem" key={curElm.id} >
              <h3>{curElm.name}</h3>
              <div className="todo-btn">
                <i className="far fa-edit add-btn" onClick={() => editItem(curElm.id)}></i>
                <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(curElm.id)} ></i>
              </div>
            </div>
            );
            

          })}

          
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All" onClick={removeItems}>
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
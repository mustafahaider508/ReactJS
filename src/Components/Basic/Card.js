import React, { useState } from 'react';
import card_Data from './data';
import Card_comp from './Card_comp';
import Nav from './Nav';

//speard operater with new Set function.. 
const unique_list = [...new Set (card_Data.map((cure) => {
  return cure.cat;
})),"All"]
console.log( unique_list);

function Caard(props) {

    const [menudata,setmenudata] = useState(card_Data);
    const [updatenav,setupdatenav] = useState(unique_list);

 
  //Filter method..
  const filterItem = (cat) => {

     if(cat==="All"){
      setmenudata(menudata);
      return;
     }
          const updateList = card_Data.filter((i) => {
            return i.cat === cat;
          })
          setmenudata(updateList);
  }



    return (
        <>
        <Nav filterItem={filterItem} updatenav={updatenav} />
        <Card_comp menudata={menudata} />
        
           </>
    )
}

export default Caard

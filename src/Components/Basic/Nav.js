import React from 'react';
import { Box } from '@mui/system';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Nav({filterItem,updatenav}) {
 const [value, setValue] = React.useState();

const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange}  centered>
          {updatenav.map((curElm) => {
              return (
                <Tab onClick={() => filterItem(curElm)}  label={curElm} />
              )
          })}
        
      </Tabs>
    </Box>
            
        </>
    )
}

export default Nav

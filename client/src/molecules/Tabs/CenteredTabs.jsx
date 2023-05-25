import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useNavigate} from 'react-router-dom'
import CenteredTabsCSS from './CenteredTabs.module.css'


const CenteredTabs =()=> {
  var navigate = useNavigate()
  
const [value, setValue] = React.useState(1);

 const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '70%'}}>
      <Tabs className={CenteredTabsCSS.hover}centered >
        <Tab label="Home" onClick={()=>{navigate("/Home"); }} />
        <Tab label="Profile"onClick={()=>{navigate("/Profile");}} />
        <Tab label="Table" onClick={()=>{navigate("/Table");}}/>
      </Tabs>
    </Box>
  );
}

export default CenteredTabs
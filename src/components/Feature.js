

import { Box, Tab, Tabs, Typography } from '@mui/material';
import All from './images/All'
import Kids from './images/kids';
import Light from './images/light';
import './style.css'

import { useState } from 'react';function Feature() {
  const [tabIndex, setTabIndex] = useState(0);const handleTabChange = (event, newTabIndex) => {
   
    setTabIndex(newTabIndex);
  };return (
    
    <Box>
    
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" >
          <Tab label="Female" style={{color:"lightseagreen"}} />
          <Tab label="Gadgets" style={{color:"lightseagreen"}} />
          <Tab label="Male" style={{color:"lightseagreen"}} />
          <Tab className="forkids" label="Kids" style={{color:"lightseagreen"}} />
        </Tabs>
      </Box>
      <Box sx={{ padding: 1 }}>
      {/* <h3 className="shopmob" style={{textAlign:"center",color:"lightseagreen", fontWeight:"700"}}>Latest</h3> */}
        {tabIndex === 0 && (
          <Box>
            <Light/>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Kids />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>The third tab</Typography>
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <Typography>The third tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}export default Feature;


import { Box, Tab, Tabs, Typography } from '@mui/material';
import All from './images/All'
import Kids from './images/kids';
import Light from './images/light';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import './style.css'


import { useState } from 'react';function Feature() {
  const [tabIndex, setTabIndex] = useState(0);const handleTabChange = (event, newTabIndex) => {
   
    setTabIndex(newTabIndex);
  };
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
       
        main: '#616161',
        
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <Box>
    
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" indicatorColor="secondary">
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
    </ThemeProvider>
  );
}export default Feature;
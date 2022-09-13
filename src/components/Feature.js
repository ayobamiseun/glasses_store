

import { Box, Tab, Tabs, Typography } from '@mui/material';
import All from './images/All'
import Shoes from './images/Shoes'
import { useState } from 'react';function Feature() {
  const [tabIndex, setTabIndex] = useState(0);const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth" >
          <Tab label="All Products" />
          <Tab label="Anti-blue Light" />
          <Tab label="Night Glasses" />
          <Tab label="For Kids Only" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <All/>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <All />
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
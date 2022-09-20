import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Kids from './images/kids';
import Light from './images/light';
import { createTheme, ThemeProvider  } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Fft() {
    const theme = createTheme({
        palette: {
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
           
            main: '#00BFA5',
            
          },
        },
      });
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" indicatorColor="secondary">
          <Tab label="Female" {...a11yProps(0)} style={{color:"lightseagreen"}} />
          <Tab label="Gardget" {...a11yProps(1)} style={{color:"lightseagreen"}} />
          <Tab label="Male" {...a11yProps(2)} style={{color:"lightseagreen"}} />
          <Tab label="Kids" {...a11yProps(3)}  style={{color:"lightseagreen"}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Light/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Kids/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Kids/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Kids/>
      </TabPanel>
    </Box>
    </ThemeProvider>
  );
}

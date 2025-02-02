/* React */
import React from 'react';

import { 
  Box
} from '@material-ui/core';

/* Local Files */
import Window from './window.js';
import SideBar from './sideBar.js';

/* Local Files Styling */
import './App.css';

function App() {
  return (
  	<Box className='App'>
  		<Window/>
      <SideBar id='side-bar'/>
  </Box>
  );
}

export default App;

/* React */
import React from 'react';

import { 
  Box,
  Typography,
  Button
} from '@material-ui/core';

/* Local Files */
import Navigation from './navigation.js';
import Window from './window.js';

/* Local Files Styling */
import './App.css';

function App() {
  return (
  	<Box className='App'>
  		<Window/>
	</Box>
  );
}

export default App;

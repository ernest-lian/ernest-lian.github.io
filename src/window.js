import { 
  Box
} from '@material-ui/core';

import Navigation from './navigation.js';

import './window.css';

const Window = () => {
  return(
    <Box
      id='application-wrapper'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Navigation/>
    </Box>
  )
}

export default Window;

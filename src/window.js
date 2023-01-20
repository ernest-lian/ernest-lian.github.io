import { 
  Box
} from '@material-ui/core';

import Content from './content.js';
import Footer from './footer.js';

import './window.css';

const Window = () => {
  return(
    <Box
      id='application-wrapper'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Content/>
    </Box>
  )
}

export default Window;

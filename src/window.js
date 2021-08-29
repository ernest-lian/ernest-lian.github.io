import { 
  Box,
  Typography,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './navigation.js';

import './window.css';

const useStyles = makeStyles({
  logoBoxWrapper: {
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px'
  },
  loginBoxWrapper: {
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px'
  },
  homeScreenText: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '30px',
    color: 'white'
  },
  loginButton: {
    backgroundImage: 'linear-gradient(to right, #DAE2F8 0%, #D6A4A4  51%, #DAE2F8  100%)'         
  }
});

const Window = ({
    
}) => {
  const classes = useStyles();

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

import React from 'react';

import { Box } from '@material-ui/core';

const Footer = () => {
  return (
  	<React.Fragment>
  		<Box
  			color='white'
  			textAlign='center'
  			style={{'background-color': '#181818'}}
  			p={5}
  		>
    		coded by <span style={{'color': '#FF7E6B'}}> ernest</span> ❤️
    	</Box>
	</React.Fragment>
  );
}

export default Footer;

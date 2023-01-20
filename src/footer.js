import React from 'react';

import { Box } from '@material-ui/core';

const Footer = () => {
  return (
	<React.Fragment>
	<Box
		p={5}
	>
	  designed & developed by <span style={{'color': '#FF7E6B'}}> ernest</span> on his 🖥️
  </Box>
	</React.Fragment>
  );
}

export default Footer;

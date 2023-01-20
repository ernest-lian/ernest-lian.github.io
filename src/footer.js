import React from 'react';

import { Box } from '@material-ui/core';

import './footer.css';

const Footer = () => {
  return (
	<React.Fragment>
	<Box
		id='footer'
		pt={4}
		pb={4}
	>
	  designed 🎨 & developed 👨‍💻 by <span style={{'color': '#b8d8be'}}> ernest 🐂 </span>
  </Box>
	</React.Fragment>
  );
}

export default Footer;

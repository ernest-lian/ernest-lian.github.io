import React from 'react';

import { Box, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import './project.css';

const Project = ({
    name,
    description,
    image,
    link
}) => {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    
    return(
        <Box>
            <Box
                color='white'
                style= {{
                    'font-family': 'Raleway, sans-serif',
                    'font-weight': 'bold',
                    'font-size': '20px'
                }}
            >
                {name}
            </Box>
            <Box
                color='white'
                style= {{
                    'font-family': 'Raleway, sans-serif',
                    'font-size': '15px'
                }}
                pt={2}
                pb={2}
            >
                {description}
            </Box>
            <Box
                component='img'
                width='25%'
                height='25%'
                src={image}
            />
            <Box
                color='white'
                style= {{
                    'font-family': 'Raleway, sans-serif',
                    'font-size': '15px'
                }}
            >
                VIEW PROJECT
            </Box>
        </Box>
    )
}

export default Project;

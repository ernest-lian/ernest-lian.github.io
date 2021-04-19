import React from 'react';

import { Box, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import './project.css';

const Project = ({
    name,
    description,
    image,
    link,
    background
}) => {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    
    return(
        <Box
            id='mockup-container'
            p={2}
        >
            <Box
                id='mockup-image-container'
                borderRadius='5px'
                onClick={() => openInNewTab(link)}
                style={{
                    'background-color': background
                }}
            >
                <Box
                    component='img'
                    width='100%'
                    src={image}
                    id='mockup-image'
                />
            </Box>
            <Box
                color='white'
                style= {{
                    'font-family': 'Lato, sans-serif',
                    'font-weight': 'bold',
                    'font-size': '30px'
                }}
                pt={2}
            >
                {name}
            </Box>
            <Box
                color='white'
                style= {{
                    'font-family': 'Lato, sans-serif',
                    'font-size': '15px'
                }}
                pt={2}
                pb={2}
            >
                {description}
            </Box>
            <Box
                color='white'
                style= {{
                    'font-family': 'Lato, sans-serif',
                    'font-weight': '600',
                    'font-size': '15px'
                }}
            >
                VIEW PROJECT
            </Box>
        </Box>
    )
}

export default Project;

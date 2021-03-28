import React from 'react';

import { Box, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import './project.css';

import Spotilytics from './images/spotilytics.png';

const Project = () => {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    
    return(
        <Box
            bgcolor='#2d2e2e'
            className='project-biography'
            justifyContent='space-around'
        >
            <Box
                display='flex'
                alignItems='center'
                bgcolor='white'
                borderRadius='15px'
                className='project-container'
                onClick={() => openInNewTab('https://github.com/ernest-lian/Spotilytics')}
            >
                <Box
                    borderRadius='inherit'
                    className='project-text-container'
                >
                    <Box
                        className='project-text'
                    >
                    <Box
                        display='flex'
                        flexDirection='column'
                        textAlign='left'
                        style= {{ 'font-size': '50px'}}
                    >
                        spotilytics
                    </Box>

                    <Box
                        component={Typography}
                        style= {{ 'font-size': '20px', 'padding': '1rem 0 1.5rem 0'}}
                    >
                        Song recommendation Spotify analytics platform
                    </Box>
                    <Box
                        display='flex'
                        alignItems='center'
                    >
                        <Box
                            component={Typography}
                            style= {{ 'font-size': '20px' }}
                            className='view-project'
                        >
                            View Project <span
                                style= {{ 'vertical-align': 'sub'}}
                            >
                                {<ArrowRightAltIcon/>}
                            </span>
                        </Box>
                    </Box>
                    </Box>
                </Box>
                <Box
                        className='project-icon-container'
                    >
                        <Box
                            component='img'
                            src={Spotilytics}
                            width='80%'
                            height='80%'
                            className='project-icon'
                        />
                    </Box>
                </Box>
        </Box>
    )
}

export default Project;

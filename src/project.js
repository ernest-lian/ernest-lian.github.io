import React from 'react';

import { Box, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import './project.css';

import Spotilytics from './images/spotilytics.png';

const Project = () => {
    return(
        <Box
            className='project-container'
        >
            <Box
                justifyContent='space-evenly'
                className='project'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-evenly'
                    className='project-text'
                >
                    <Box>
                        {/* <Box
                            component={Typography}
                            style= {{ 'font-size': '30px'}}
                        >
                            Spotilytics
                        </Box> */}
                        <Box
                            component={Typography}
                            style= {{ 'font-size': '20px'}}
                            color='white'
                        >
                            Song recommendation <span style={{'color': '#FF7E6B'}}>Spotify analytics</span> platform
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='row'
                        style= {{ 'padding-top': '1em'}}
                        color='white'
                    >
                        <Box>
                            View Project
                        </Box>
                        <ArrowRightAltIcon/>
                    </Box>
                </Box>
                <Box
                    className='spotilytics-container'
                >
                    <Box
                        component='img'
                        width='100%'
                        height='100%'
                        src={Spotilytics}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Project;

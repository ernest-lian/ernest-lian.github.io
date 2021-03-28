import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import './project.css';

import Spotilytics from './images/spotilytics.png';

const styles = makeStyles({
    halfBackground: {
        'background': 'linear-gradient(to top, #2d2e2e 50%, transparent 0%)'
    }
});

const Project = () => {
    const classes = styles();
    
    return(
        <Box
            bgcolor='#2d2e2e'
            display='flex'
            className='project-biography'
            justifyContent='space-around'
            alignItems='center'
        >
            <Box
                className='project-intro'
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
                    color='white'
                    style= {{ 'font-size': '20px', 'padding': '1rem 0 1.5rem 0'}}
                >
                    Song recommendation <span style={{'color': '#FF7E6B'}}>Spotify analytics</span> platform
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                >
                    <Box
                        component={Typography}
                        color='white'
                        style= {{ 'font-size': '20px', 'padding': '1rem 0 1.5rem 0'}}
                    >
                        View Project
                    </Box>
                    <Box>
                        <ArrowRightAltIcon/>
                    </Box>
                </Box>
            </Box>
            <Box
                    className='project-profile-container'
                >
                    <Box
                        component='img'
                        src={Spotilytics}
                        width='80%'
                        height='80%'
                        className='project-profile'
                    />
                </Box>
        </Box>
    )
}

export default Project;

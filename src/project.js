import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import './project.css';

import Spotilytics from './images/spotilytics.png';

const styles = makeStyles({
    halfBackground: {
        'background': 'linear-gradient(to top, #1D1F2E 50%, transparent 0%)'
    }
});

const Project = () => {
    const classes = styles();
    
    return(
        <Box
            className='project-container'
        >
            <Box
                component={Typography}
                color='white'
                className={` ${classes.halfBackground} ${classes.fontWeight}`}
                display='flex'
                justifyContent='center'
                style= {{ 'font-size': '50px'}}
            >
                spotilytics
            </Box>
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
                            style= {{
                                'font-size': '20px',
                                'font-weight': '700'
                            }}
                            color='white'
                        >
                            Song recommendation <span style={{'color': '#FF7E6B'}}>Spotify analytics</span> platform
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='row'
                        style= {{
                            'padding-top': '1em'
                        }}
                        color='white'
                    >
                        <Box
                            component={Typography}
                            style= {{
                                'font-size': '20px',
                                'font-weight': '700'
                            }}
                            color='white'
                        >
                            View Project  
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                        >
                            <ArrowRightAltIcon/>
                        </Box>
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

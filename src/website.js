
import React, {useState} from 'react';

/* Material-UI Components */
import { Box, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { makeStyles } from '@material-ui/core/styles';

import ErnestBefore from './images/ernest-before.jpg';
import ErnestAfter from './images/ernest-after.jpg';

import About from './about.js';

import './website.css';

const styles = makeStyles({
    fontWeight: {
        'font-weight': 400
    },
    fiveFontSize: {
        // 'font-size': '7vw'
        'font-size': '50px'
    },
    threeFontSize: {
        'font-size': '2vw'
    }
});

const Website = () => {
    const classes = styles();
    const [isBefore, setIsBefore] = useState(true);

    const handleHover = () => setIsBefore(!isBefore);

    return (
        <React.Fragment>
            <Box
                display='flex'
                className='biography'
                justifyContent='space-around'
                alignItems='center'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    className='intro'
                    textAlign='justify'
                >
                    <Box
                        component={Typography}
                        color='white'
                        className={`${classes.typographyStyle} ${classes.fontWeight}`}
                    >
                        hi i am <span style={{'color': '#FF7E6B'}}>Ernest.</span>
                    </Box>
                    <Box
                        textAlign='justify'
                        className='intro-text-container'
                    >
                        <Box
                            component={Typography}
                            color='white'
                        >
                            I study Computer Science at the University of Waterloo
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                    >
                        <Box
                        >
                            <LinkedInIcon color='primary'
                                style={{ 
                                    'font-size': '5vw',
                                    'padding': '5px 5px 0px 0px'
                                }}
                            />
                            <i class="fab fa-linkedin"></i>
                        </Box>
                        <Box
                        >
                            <GitHubIcon color='primary' style={{ 'font-size': '5vw', 'padding': '5px 5px 0px 0px' }}/>
                        </Box>
                        <Box
                        >
                            <MailOutlineIcon color='primary' style={{ 'font-size': '5vw', 'padding': '5px 5px 0px 0px'}}/>
                        </Box>
                        <Box>
                            <InsertDriveFileIcon color='primary' style={{ 'font-size': '5vw', 'padding': '5px 5px 0px 0px'}}/>
                        </Box>
                    </Box>
                </Box>
                <Box
                    className='profile-container'
                >
                    <Box
                        component='img'
                        width='80%'
                        height='80%'
                        src={isBefore ? ErnestBefore : ErnestAfter}
                        onMouseOver={handleHover}
                        onMouseOut={handleHover}
                        className='profile'
                    />
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default Website;

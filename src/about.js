
import React, {useState} from 'react';
import { Box, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import './about.css';

const styles = makeStyles({
    fontWeight: {
        'font-weight': 900
    },
    halfBackground: {
        'background': 'linear-gradient(to top, orange 50%, transparent 0%)'
    }
});

const About = () => {
    const classes = styles();

    return (
        <React.Fragment>
            <Box
                component={Typography}
                variant='h2'
                color='white'
                className={`${classes.halfBackground} ${classes.fontWeight}`}
                display='flex'
                justifyContent='center'
            >
                About
            </Box>
            <Box
                className='about-container'
                display='flex'
                textAlign='center'
            >
                <Box
                    component={Typography}
                    variant='h7'
                    color='white'
                >
                    spam spam spam spam spam spam spam spam spam
                    spam spam spam spam spam spam spam spam spam
                    spam spam spam spam spam spam spam spam spam
                </Box>
            </Box>
        </React.Fragment>
        );
}

export default About;


import React, {useState} from 'react';
import { Box, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    fontWeight: {
        'font-weight': 900
    },
    halfBackground: {
        'background': 'linear-gradient(to top, orange 50%, transparent 50%)'
    }
});

const About = () => {
    const classes = styles();

    return (
        <Box
            component={Typography}
            variant='h2'
            color='white'
            className={`${classes.halfBackground} ${classes.fontWeight}`}
            display='flex'
            justifyContent='center'
        >
            About
        </Box>);
}

export default About;

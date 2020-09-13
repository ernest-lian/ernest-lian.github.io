
import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ErnestAbout from './images/ernest-about.jpg';
import ErnestAboutSecond from './images/ernest-about-2.jpg';
import Me from './images/me.png';

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
        <Box
            className='about-section'
            pt={4}
        >
            <Box
                component={Typography}
                variant='h2'
                color='white'
                className={` ${classes.halfBackground} ${classes.fontWeight}`}
                display='flex'
                justifyContent='center'
            >
                about
            </Box>
            <Box
                className='about-container'
                display='flex'
                flexDirection='column'
                textAlign='left'
                bgcolor='orange'
            >
                <Box
                    component={Typography}
                    color='white'
                    style= {{ 'font-size': '30px', 'font-weight': '900'}}
                    pb={3}
                >
                    <span style={{
                                    'color': 'black',
                                }}> ernest (he/him) </span>- I am a fourth year Computer Science student at the University of Waterloo
                </Box>
                <Box
                    className='about-section-two'
                    component={Typography}
                    color='white'
                    style= {{ 'font-size': '20px'}}
                    pb={3}
                >
                    I've always had an interest in software development as it challenges not only my ability to think from
                    a critical perspective, but also my creativity. I'm interested in writing more accessible
                    code for all individuals.
                </Box>
                <Box
                    className='about-section-three'
                    component={Typography}
                    color='white'
                    style= {{ 'font-size': '20px'}}
                    pb={2}
                >
                    I love collecting LP records, listening to real crime podcasts, and hope to open my
                    own embroidering small business in the future. 
                </Box>
                <Box
                display='flex'
                justifyContent='center'
                flexDirection='column'
                className='about-profile-container'
                pt={5}
            >
                <Box
                    display='flex'
                    className='about-images'
                >
                    <Box
                        className='about-profile'
                        component='img'
                        src={ErnestAbout}
                        pb={3}
                        pr={2}
                    />
                    <Box
                        className='about-profile-two'
                        component='img'
                        src={ErnestAboutSecond}
                        pb={3}
                        pl={2}
                    />
                </Box>
                <Box
                    className='about-profile-me'
                    width='25%'
                    height='25%'
                    component='img'
                    src={Me}
                >

                </Box>
            </Box>
            </Box>
        </Box>
        );
}

export default About;

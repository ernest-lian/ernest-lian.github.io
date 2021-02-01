
import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import ErnestBefore from './images/ernest-before.jpg';

import './about.css';
import Music from './music.js';

const About = () => {
    return (
        <React.Fragment>
        <Box
            alignSelf='center'
        >
            <Box
                display='flex'
                className='about-biography'
                justifyContent='space-around'
                alignItems='center'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    className='about-intro'
                    textAlign='left'
                >
                    <Box
                        className='about-border'
                    >
                        <Box
                            component={Typography}
                            color='white'
                            style= {{
                                'font-size': '30px',
                                'font-weight': '900'
                            }}
                            pb={3}
                        >
                            I am ernest, a uwaterloo student and aspiring computer scientist.
                        </Box>
                        <Box
                            component={Typography}
                            color='white'
                            style= {{ 'font-size': '15px'}}
                            pb={3}
                        >
                           With 6 previous internships in; QA, back-end development, full stack development. I have been able to experience numerous discplines in the software industry.
                        </Box>
                        <Box
                            component={Typography}
                            color='white'
                            style= {{ 'font-size': '15px'}}
                            pb={3}
                        >
                           I have a huge interest in learning more about front-end development and am passionate about writing more accessible code for all individuals.
                        </Box>
                        <Box
                            component={Typography}
                            color='white'
                            style= {{ 'font-size': '15px'}}
                            pb={2}
                        >
                            Aside from work I am a music enthusiast who has a love for collecting LP records, am an aspiring vegetarian, and hope to open up my own embroidery small business in the future. 
                        </Box>
                    </Box>
                </Box>
                <Box
                    className='about-profile-container'
                >
                    <Box
                        component='img'
                        src={ErnestBefore}
                        className='about-profile'
                    />
                </Box>
            </Box>
        </Box>
        <Music/>
        </React.Fragment>
        );
}

export default About;

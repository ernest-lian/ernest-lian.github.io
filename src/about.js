
import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import './about.css';
import Music from './music.js';

const About = () => {
    return (
        <React.Fragment>
        <Box
            className='about-biography'
            justifyContent='space-around'
        >
            <Box
                display='flex'
                alignItems='center'
                bgcolor='white'
                borderRadius='15px'
                className='about-container'
            >
                <Box
                    borderRadius='inherit'
                    className='about-text-container'
                >
                    <Box
                        className='about-text'
                    >
                    <Box
                        display='flex'
                        flexDirection='column'
                        textAlign='left'
                        style= {{ 'font-size': '40px'}}
                        className='about-text-header'
                    >
                        I am ernest, a uwaterloo student and aspiring computer scientist.
                    </Box>

                    <Box
                        component={Typography}
                        style= {{ 'font-size': '20px', 'padding': '1rem 0 1.5rem 0'}}
                    >
                        With 6 previous internships in; QA, back-end development, full stack development. I have been able to experience numerous discplines in the software industry.
                    </Box>
                    <Box
                        component={Typography}
                        style= {{ 'font-size': '20px' }}
                    >
                        I have a huge interest in learning more about front-end development and am passionate about writing more accessible code for all individuals.
                    </Box>
                    <Box
                        component={Typography}
                        style= {{ 'font-size': '20px', 'padding': '1rem 0 1.5rem 0'}}
                    >
                        Aside from work I am a music enthusiast who has a love for collecting LP records, am an aspiring vegetarian, and hope to open up my own embroidery small business in the future. 
                    </Box>
                    </Box>
                </Box>
                </Box>
        </Box>
        <Music/>
        </React.Fragment>
        );
}

export default About;

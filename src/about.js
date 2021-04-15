
import React, {useState} from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import './about.css';
import Music from './music.js';

/* Photos */
import ErnestAboutOne from './images/ernest-about.png';
import ErnestAboutTwo from './images/ernest-about-2.png';

const About = () => {
    return (
        <React.Fragment>
        <Box
            className='about-border'
            color='white'
        >
            <Box
                className='about-text'
            >
                <Box
                    display='flex'
                    id="about-text-header-container"
                >
                    <Box
                        id='about-profile-container'
                    >
                        <Box
                            component='img'
                            width='100%'
                            height='100%'
                            src={ErnestAboutOne}
                            id='about-profile'
                        />
                    </Box>
                    <Box
                        id='about-text-container'
                    >
                        <Box
                            display='flex'
                            flexDirection='column'
                            component={Typography}
                            textAlign='left'
                            id='about-text-header'
                        >
                            <span style={{'color': '#FF7E6B'}}>About me</span> Toronto based aspiring computer scientist.
                        </Box>
                        <Box
                            component={Typography}
                            className='about-text-content'
                            pt={2}
                        >
                            I am a student at the University of Waterloo pursuing a Bachelor of Computer Science and incoming backend dev at <a href="https://www.shopify.ca/" target="_blank" rel="noopener noreferrer" style={{'color': '#FF7E6B', 'text-decoration': 'none'}}>shopify</a>.
                        </Box>
                        <Box
                            component={Typography}
                            className='about-text-content'
                            style= {{ 'padding': '1rem 0 0 0'}}
                        >
                            With 6 previous internships ranging from; QA, back-end and full stack development, I have been able to experience numerous discplines in the software industry.
                        </Box>

                        <Box
                            component={Typography}
                            className='about-text-content'
                            style= {{ 'padding': '1rem 0 0 0' }}
                        >
                            I have a huge interest in learning more about front-end development and am passionate about writing accessible code for all individuals.
                        </Box>
                        <Box
                            component={Typography}
                            className='about-text-content'
                            style= {{ 'padding': '1rem 0 0 0' }}
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

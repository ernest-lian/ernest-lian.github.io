
import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ErnestBefore from './images/ernest-before.jpg';

import './about.css';

const styles = makeStyles({
    fontWeight: {
        'font-weight': 900
    },
    halfBackground: {
        'background': 'linear-gradient(to top, white 50%, transparent 0%)'
    }
});

const About = () => {
    const classes = styles();

    return (
        <Box
            className='about-section'
            pt={4}
            pl={8}
            pr={8}
            display='flex'
        >
            <Box
                component='img'
                src={ErnestBefore}
                height='50%'
                width='50%'
            />
            <Box
                className='about-container'
                display='flex'
                flexDirection='column'
                textAlign='left'
                bgcolor='white'
            >
                <Box
                    component={Typography}
                    color='black'
                    style= {{
                        'font-size': '20px',
                        'font-weight': '900'
                    }}
                    pb={3}
                >
                    I am ernest, an aspiring Computer Scientist attending the University of Waterloo.
                </Box>
                <Box
                    component={Typography}
                    color='black'
                    style= {{ 'font-size': '12px'}}
                    pb={3}
                >
                    I have 2+ years of experience working across various software positions; QA, back-end development, full stack development. I have a huge interest in front-end development and am passionate about writing more accessible code.
                    code for all individuals.
                </Box>
                <Box
                    component={Typography}
                    color='black'
                    style= {{ 'font-size': '12px'}}
                    pb={2}
                >
                    Aside from work, I love collecting LP records, am an aspiring vegetarian, and mediocre embroiderer 
                </Box>
            </Box>
        </Box>
        );
}

export default About;

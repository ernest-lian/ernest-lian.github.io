/* React */
import React from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';

/* Local Files */
import './website.css';
import Project from './project.js';

/* Local Images */
import Spotilytics from './images/spotilytics-new.png';
import Blank from './images/blank.png';

const Website = () => {
    return (
        <React.Fragment>
            <Box
                id='biography'
                alignItems='center'
            >
                <Box
                    id='border'
                >
                    <Box
                        id='name'
                        color='black'
                    >
                        <span id='hello'>Hello</span> I'm <span style={{'color': '#95BF47'}}>Ernest.</span>
                    </Box>
                    <Box
                        color='#808080'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '30px',
                            'padding-top': '2rem'
                        }}
                    >
                        Software Developer.
                    </Box>
                    <Box
                        color='black'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '20px',
                            'padding-top': '2rem'
                        }}
                    >
                        I'm passionate about developing accessible software for everyone.
                    </Box>
                    <Box
                        color='black'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '20px'
                        }}
                    >
                        Currently enhancing the Theme Editor experience for merchants @ <a href="https://www.shopify.ca/" target="_blank" rel="noopener noreferrer" style={{'color': '#95BF47', 'text-decoration': 'none'}}>Shopify.</a>
                    </Box>
                </Box>
            </Box>
            <Box
                id='side-projects-container'
            >
                <Box
                    color='black'
                    style= {{
                        'font-family': 'Lato, sans-serif',
                        'font-weight': 'bold',
                        'font-size': '30px'
                    }}
                    pb={3}
                >
                    Side projects
                </Box>
                <Box
                    id='side-project-list-container'
                    pb={10}
                >
                    <Project
                        name='synthesize'
                        description='in progress'
                        link='https://ernest-lian-synthesize.herokuapp.com/'
                        image={Blank}
                        background='#d3e0e5'
                    />
                    <Project
                        name='spotilytics'
                        description='Song recommendation Spotify analytics platform'
                        image={Spotilytics}
                        link='https://github.com/ernest-lian/Spotilytics'
                        background='#e8f4ea'
                    />
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default Website;

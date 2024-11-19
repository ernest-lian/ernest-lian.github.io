/* React */
import React from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';

/* Local Files */
import './website.css';
import Project from './project.js';

/* Local Images */
import Spotilytics from './images/spotilytics-new.png';
import Synthesize from './images/synthesize.png';
import Splurge from './images/splurge.png';

const Website = () => {

    const handleScroll = () => {
        console.log('handle scroll')
        console.log(window)
        var topElement = document.getElementById('application-wrapper')
        topElement.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <Box
            pl={10}
            pr={10} 
        >
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
                        <span id='hello'>Hello</span> I'm <span style={{'color': '#b8d8be'}}>Ernest.</span>
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
                        I'm currently in search of my next opportunity.
                    </Box>
                    <Box
                        color='black'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '20px',
                            'padding-top': '3rem'
                        }}
                    >
                        Previously I have worked on trust & safety @ <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" style={{'color': '#FF3D33', 'text-decoration': 'none'}}>TikTok</a> and enhanching selling strategies for merchants @ <a href="https://www.shopify.ca/" target="_blank" rel="noopener noreferrer" style={{'color': '#95BF47', 'text-decoration': 'none'}}>Shopify.</a>
                    </Box>
                </Box>
            </Box>
            <Box
                id='side-projects-container'
                onClick={()=> {handleScroll()}}
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
                >
                    <Box
                        className='side-project-list-items'
                    >
                        <Project
                            name='splurge'
                            description='track and categorize monthly expenses to maintain financial stability'
                            image={Splurge}
                            link='splurge'
                            background='#edf3e2'
                        />
                    </Box>
                    <Box
                        className='side-project-list-items'
                    >
                        <Project
                            name='synthesize'
                            description='isolate vocal, drum and bass stems to create your own remixed tracks'
                            link='synthesize'
                            image={Synthesize}
                            background='#e7e9ed'
                        />
                    </Box>
                </Box>
                <Box
                    id='side-project-list-container'
                    pb={10}
                >
                    <Box
                        className='side-project-list-items'
                    >
                        <Project
                            name='spotilytics'
                            description='song recommendation Spotify analytics platform'
                            image={Spotilytics}
                            link='spotilytics'
                            background='#edf3e2'
                        />
                    </Box>
                    <Box
                        className='side-project-list-items'
                    >
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Website;

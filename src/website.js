/* React */
import React, {useState} from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

/* Local Files */
import './website.css';
import Project from './project.js';

/* Local Images */
import Spotilytics from './images/spotilytics.png';
import Blank from './images/blank.png';

const Website = () => {
    const [introIndex, setIntroIndex] = useState(0);

    const introduction = [
        'Hiya! I am',
        '你好! 我是',
        'こんにちは! 私は',
        '안녕하세요! 저는',
        'Bonjour! Je suis',
        'Hola! Yo soy',
        'Hallo! Ich bin',
        'Ciao! Io sono',
        'नमस्ते! मैं हूँ'
    ]

    return (
        <React.Fragment>
            <Box
                id='biography'
                alignItems='center'
            >
                <Box
                    className='border'
                >
                    <Box
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '15px',
                            'font-weight': '600'
                        }}
                        pb={1}
                    >
                      <span style={{'color': '#FF7E6B'}}>{introduction[introIndex]}</span>
                    </Box>
                    <Box
                        color='white'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '60px',
                            'font-weight': '600'
                        }}
                    >
                        ERNEST LIAN.
                    </Box>
                    <Box
                        color='white'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '20px',
                            'padding': '1rem 0 1.5rem 0'
                        }}
                    >
                        I am an incoming backend developer on the Online Store Editor at <a href="https://www.shopify.ca/" target="_blank" rel="noopener noreferrer" style={{'color': '#FF7E6B', 'text-decoration': 'none'}}>shopify</a>
                    </Box>
                    <Box
                        display='flex'
                        justifyContent='space-between'
                        style= {{ 'width': '8em'}}
                    >
                        <Tooltip title="LinkedIn">
                            <Box
                                className='social-icons'
                            >
                                <a href='https://www.linkedin.com/in/ernest-lian/' rel="noopener noreferrer" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin} size='2x' color='white'/>
                                </a>
                            </Box>
                        </Tooltip>
                        <Tooltip title='Github'>
                            <Box
                                className='social-icons'
                            >
                                <a href='https://github.com/ernest-lian' rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size='2x' color='white'/>
                                </a>
                            </Box>
                        </Tooltip>
                        <Tooltip title='Email'>
                            <Box
                                className='social-icons'
                            >
                                <a href='mailto: ernestclian@gmail.com'>
                                    <FontAwesomeIcon icon={faEnvelope} size='2x' color='white'/>
                                </a>
                            </Box>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
            <Box
                color='white'
                style= {{
                    'font-family': 'Lato, sans-serif',
                    'font-weight': 'bold',
                    'font-size': '30px'
                }}
                pb={3}
            >
                SIDE PROJECTS
            </Box>
            <Box
                id='side-project-list-container'
                pb={10}
            >
                <Project
                    name='spotilytics'
                    description='Song recommendation Spotify analytics platform'
                    image={Spotilytics}
                    link='https://github.com/ernest-lian/Spotilytics'
                    background='#e8f4ea'
                />
                <Project
                    name='synthesize'
                    description='in progress'
                    link='https://github.com/ernest-lian/synthesize'
                    image={Blank}
                    background='#d3e0e5'
                />
            </Box>
        </React.Fragment>
    );
}

export default Website;

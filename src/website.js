/* React */
import React, {useState} from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

/* Local Files */
import './website.css';
import Project from './project.js';
import Footer from './footer.js';

/* Local Images */
import Spotilytics from './images/spotilytics.jpg';

const Website = () => {
    return (
        <React.Fragment>
            <Box
                id='biography'
                alignItems='center'
                style= {{'margin-left': '9vw', 'margin-right': '15vw'}}
            >
                <Box
                    className='border'
                >
                    <Box
                        component={Typography}
                        style= {{ 'font-size': '20px', 'font-weight': '600'}}
                    >
                        <span style={{'color': '#FF7E6B'}}>Hiya! My name is</span>
                    </Box>
                    <Box
                        component={Typography}
                        color='white'
                        style= {{ 'font-size': '60px', 'font-weight': '600'}}
                    >
                        Ernest Lian.
                    </Box>
                    <Box
                        component={Typography}
                        color='white'
                        style= {{ 'font-size': '20px', 'padding': '1rem 0 1.5rem 0'}}
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
                                // className='social-icons'
                            >
                                <a href='https://www.linkedin.com/in/ernest-lian/' rel="noopener noreferrer" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedin} size='2x' color='white'/>
                                </a>
                            </Box>
                        </Tooltip>
                        <Tooltip title='Github'>
                            <Box
                                // className='social-icons'
                            >
                                <a href='https://github.com/ernest-lian' rel="noopener noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} size='2x' color='white'/>
                                </a>
                            </Box>
                        </Tooltip>
                        <Tooltip title='Email'>
                            <Box
                                // className='social-icons'
                            >
                                <a href='mailto: ernestclian@gmail.com'>
                                    <FontAwesomeIcon icon={faEnvelope} size='2x' color='white'/>
                                </a>
                            </Box>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
            {/* <Box
                component={Typography}
                color='white'
                textAlign='center'
                className={` ${classes.halfBackground}`}
                style= {{ 'font-size': '50px', 'font-weight': '500' }}
            >
                projects
            </Box> */}
            <Project
                name='SPOTILYTICS'
                description='song recommendation Spotify analytics platform'
                image={Spotilytics}
                link='https://github.com/ernest-lian/Spotilytics'
            />
            <Footer/>
        </React.Fragment>
    );
}

export default Website;


import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* Material-UI Components */
import { Box } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

/* Icons */
import ErnestBefore from './images/ernest-before.jpg';
import ErnestAfter from './images/ernest-after.jpg';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile } from '@fortawesome/free-regular-svg-icons';

import './website.css';
import Project from './project.js';

const styles = makeStyles({
    halfBackground: {
        'background': 'linear-gradient(to top, #2d2e2e 50%, transparent 0%)'
    }
});

const Website = () => {
    const classes = styles();
    const [isBefore, setIsBefore] = useState(true);

    const handleHover = () => setIsBefore(!isBefore);

    return (
        <React.Fragment>
            <Box
                display='flex'
                className='biography'
                justifyContent='space-around'
                alignItems='center'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    className='intro'
                    textAlign='left'
                >
                    <Box
                        className='border'
                    >
                        <Box
                            component={Typography}
                            color='white'
                            style= {{ 'font-size': '50px'}}
                        >
                            hi there, i am <span style={{'color': '#FF7E6B'}}>ernest.</span>
                        </Box>
                        <Box
                            component={Typography}
                            color='white'
                            style= {{ 'font-size': '20px', 'padding': '1rem 0 1.5rem 0'}}
                        >
                            i am an incoming backend dev at shopify
                        </Box>
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            style= {{ 'width': '8em'}}
                        >
                            <Tooltip title="LinkedIn">
                                <Box>
                                    <a href='https://www.linkedin.com/in/ernest-lian/' rel="noopener noreferrer" target='_blank'>
                                        <FontAwesomeIcon icon={faLinkedin} size='2x' color='white'/>
                                    </a>
                                </Box>
                            </Tooltip>
                            <Tooltip title='Github'>
                                <Box>
                                    <a href='https://github.com/ernest-lian' rel="noopener noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} size='2x' color='white'/>
                                    </a>
                                </Box>
                            </Tooltip>
                            <Tooltip title='Email'>
                                <Box>
                                    <a href='mailto: ernestclian@gmail.com'>
                                        <FontAwesomeIcon icon={faEnvelope} size='2x' color='white'/>
                                    </a>
                                </Box>
                            </Tooltip>
                            {/* <Tooltip title='Resume'>
                                <Box>
                                    <a href='files/ernest-lian-resume.pdf' download>
                                        <FontAwesomeIcon icon={faFile} size='2x' color='white'/>
                                    </a>
                                </Box>
                            </Tooltip> */}
                        </Box>
                    </Box>
                </Box>
                <Box
                    className='profile-container'
                >
                    <Box
                        component='img'
                        width='80%'
                        height='80%'
                        src={isBefore ? ErnestBefore : ErnestAfter}
                        onMouseOver={handleHover}
                        onMouseOut={handleHover}
                        className='profile'
                    />
                </Box>
            </Box>
            <Box
                component={Typography}
                color='white'
                textAlign='center'
                className={` ${classes.halfBackground}`}
                style= {{ 'font-size': '50px', 'font-weight': '500' }}
            >
                PROJECTS
            </Box>
            <Project/>
        </React.Fragment>
    );
}

export default Website;

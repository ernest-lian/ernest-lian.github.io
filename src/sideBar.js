/* React */
import React from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const SideBar = () => {
    return (
        <React.Fragment>
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
                            <FontAwesomeIcon icon={faLinkedin} size='2x' color='black'/>
                        </a>
                    </Box>
                </Tooltip>
                <Tooltip title='Github'>
                    <Box
                        className='social-icons'
                    >
                        <a href='https://github.com/ernest-lian' rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size='2x' color='black'/>
                        </a>
                    </Box>
                </Tooltip>
                <Tooltip title='Email'>
                    <Box
                        className='social-icons'
                    >
                        <a href='mailto: ernestclian@gmail.com'>
                            <FontAwesomeIcon icon={faEnvelope} size='2x' color='black'/>
                        </a>
                    </Box>
                </Tooltip>
            </Box>
        </React.Fragment>
    );
}

export default SideBar;

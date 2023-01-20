/* React */
import React from 'react';

/* Material-UI*/
import { Box } from '@material-ui/core';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

/* Local Files Styling */
import './project.css';

const Project = ({
    name,
    description,
    image,
    link,
    background
}) => {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    
    return(
        <Box
            id='mockup-container'
            p={2}
        >
            <Box
                id='mockup-image-container'
                borderRadius='5px'
                onClick={() => openInNewTab(link)}
                style={{
                    'background-color': background
                }}
            >
                <Box
                    display='block'
                    component='img'
                    width='100%'
                    src={image}
                    id='mockup-image'
                />
            </Box>
            <Box
                color='black'
                style= {{
                    'font-family': 'Lato, sans-serif',
                    'font-weight': 'bold',
                    'font-size': '30px'
                }}
                pt={2}
            >
                {name}
            </Box>
            <Box
                color='black'
                style= {{
                    'font-family': 'Lato, sans-serif',
                    'font-size': '15px',
                    'opacity': '70%'
                }}
                pt={2}
                pb={2}
            >
                {description}
            </Box>
            <Box
                display='inline-flex'
                flexDirection='row'
                id='mockup-view-project-container'
            >
                <Box
                    color='black'
                    style= {{
                        'font-family': 'Lato, sans-serif',
                        'font-weight': '600',
                        'font-size': '15px'
                    }}
                    alignSelf='center'
                    pb={1}
                    id='mockup-view-project'
                >
                    View Project
                </Box>
                <Box
                    pl={1}
                >
                    <FontAwesomeIcon id='mockup-arrow' icon={faLongArrowAltRight} size='1x' color='#b8d8be'/>
                </Box>
            </Box>
        </Box>
    )
}

export default Project;

/* React */
import React, {useState} from 'react';

/* Material UI */
import { Box } from '@material-ui/core';

/* Local Files */
import './about.css';

/* Photos */
import ErnestBefore from './images/ernest-before.jpg';
import ErnestAfter from './images/ernest-after.jpg';

const About = () => {
    const [isBefore, setIsBefore] = useState(true);

    const handleHover = () => setIsBefore(!isBefore);

    return (
        <React.Fragment>
        <Box
            id='about-border'
            color='black'
        >
            <Box
                id='about-text'
            >
                <Box
                    display='flex'
                    id="about-text-header-container"
                >
                    <Box
                        id='about-profile-container'
                        style={{ 'background-image': 'red'}}
                    >
                        <Box
                            component='img'
                            width='100%'
                            height='100%'
                            src={isBefore ? ErnestBefore : ErnestAfter}
                            onMouseOver={handleHover}
                            onMouseOut={handleHover}
                            id='about-profile'
                        />
                    </Box>
                    <Box
                        id='about-text-container'
                    >
                        <Box
                            style= {{
                                'font-family': 'Lato, sans-serif',
                                'font-weight': 'bold',
                                'font-size': '40px'
                            }}
                        >
                             <span id='about-me-header'> About Me</span>
                        </Box>
                        <Box
                            id='about-text-content'
                            style= {{
                                'font-family': 'Lato, sans-serif',
                                'padding-top': '2rem'
                            }}
                        >
                            I am a Toronto-based software engineer and Computer Science gradudate from the <a href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank" rel="noopener noreferrer" style={{'color': '#ffdf00', 'text-decoration': 'none'}}>University of Waterloo.</a>
                        </Box>
                        <Box
                            id='about-text-content'
                            pt={3}
                            style= {{
                                'font-family': 'Lato, sans-serif'
                            }}
                        >
                            As a first generation student, I am really passionate about not only making education more accessible  but also providing resources to aid individuals from underrepresented communities. 
                        </Box>
                        <Box
                            id='about-text-content'
                            pt={3}
                            style= {{
                                'font-family': 'Lato, sans-serif'
                            }}
                        >
                            Currently enhancing the Theme Editor experience for merchants @ <a href="https://www.shopify.ca/" target="_blank" rel="noopener noreferrer" style={{'color': '#95BF47', 'text-decoration': 'none'}}>Shopify.</a>
                        </Box>
                    </Box>
                </Box>
            </Box>  
        </Box>
    </React.Fragment>
        );
}

export default About;

/* React */
import React, {useState} from 'react';

/* Material UI */
import { Box } from '@material-ui/core';

/* Local Files */
import './about.css';

/* Photos */
import ErnestBeforeFrog from './images/ernest-frog-square.png';
import ErnestAfterFrog from './images/ernest-frog-square-after.png';
import Hobbies from './images/hobbies.png';
import Music from './images/music.png';

const About = () => {
    const [isBefore, setIsBefore] = useState(true);

    const handleHover = () => setIsBefore(!isBefore);
    return (
        <Box
            pl={10}
            pr={10}
            id='identification-card' 
        >
        <Box
            id='about-border'
            color='black'
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
                        src={isBefore ? ErnestBeforeFrog : ErnestAfterFrog}
                        onMouseOver={handleHover}
                        onMouseOut={handleHover}
                        id='about-profile'
                    />
                </Box>
                <Box
                    id='about-text-container'
                >
                    <Box
                        id='about-text-content'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'padding-top': '2rem',
                            'font-size': '40px',
                            'font-weight': 'bold'
                        }}
                    >
                        Ernest Lian
                    </Box>
                    <Box
                        id='about-text-content'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '30px',
                            'color': '#808080',
                            'font-weight': 'bold'
                        }}
                    >
                        Software Developer
                    </Box>
                    <Box
                        id='about-text-content'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '20px',
                            'font-weight': 'bold'
                        }}
                    >
                        Toronto, Canada
                    </Box>
                    <Box
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '18px',
                            'padding-top': '2rem',
                        }}
                    >
                        I am a Computer Science gradudate from the <a href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank" rel="noopener noreferrer" style={{'color': '#ffdf00', 'text-decoration': 'none'}}>University of Waterloo.</a>
                    </Box>
                    <Box
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '18px',
                            'padding-top': '2rem',
                        }}
                    >
                        As a first generation post-secondary student, I am really passionate about not only making education more accessible  but also providing resources to aid individuals from underrepresented communities.
                    </Box>
                </Box>
            </Box>
        </Box>
        <Box
            id='hobbies-and-music'
        >
            <Box
                id='music'
                component='img'
                src={Hobbies}
            />
            <Box
                id='hobbies'
                component='img'
                src={Music}
            />
        </Box>
    </Box>
        );
}

export default About;

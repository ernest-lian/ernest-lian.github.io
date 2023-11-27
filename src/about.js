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
                        id='about-text-header'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'padding-top': '2rem',
                            'font-weight': 'bold'
                        }}
                    >
                        Ernest Lian
                    </Box>
                    <Box
                        id='about-text-header'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'color': '#808080',
                            'font-weight': 'bold'
                        }}
                    >
                        Software Developer
                    </Box>
                    <Box
                        id='about-text-sub-header'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'font-size': '20px',
                            'padding-top': '1rem',
                            'font-weight': 'bold'
                        }}
                    >
                        Toronto, Canada 🍁
                    </Box>
                    <Box
                        id='about-text-content'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'padding-top': '2rem',
                        }}
                    >
                        I am a Computer Science gradudate from the <a href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank" rel="noopener noreferrer" style={{'color': '#F6BE00', 'text-decoration': 'none'}}>University of Waterloo.</a>
                    </Box>
                    <Box
                        id='about-text-content'
                        style= {{
                            'font-family': 'Lato, sans-serif',
                            'padding-top': '2rem',
                        }}
                    >
                       As a first-generation post-secondary student, I am committed to enhancing accessibility to education and providing resources for individuals within underrepresented communities. My passion lies in creating opportunities that empower and support those who face unique challenges in pursuing higher education.
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

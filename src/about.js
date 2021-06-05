/* React */
import React, {useState} from 'react';

/* Material UI */
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

/* Local Files */
import './about.css';
import Music from './music.js';

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
            color='white'
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
                            display='flex'
                            flexDirection='column'
                            component={Typography}
                            textAlign='left'
                            id='about-text-header'
                        >
                            <span style={{'color': '#ff2015'}}>About me</span>
                        </Box>
                        <Box
                            id='about-text-content'
                            pt={2}
                        >
                            I am a Toronto-based software engineer and Computer Science gradudate from the <a href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank" rel="noopener noreferrer" style={{'color': '#FDFD96', 'text-decoration': 'none'}}>University of Waterloo</a>.
                        </Box>
                        <Box
                            id='about-text-content'
                            pt={3}
                        >
                            I believe that accessibility is one of the most disregarded aspects of software, everyone deserves the best user experience possible and I hope to be able to positively contribute to this change.
                        </Box>
                        <Box
                            id='about-text-content'
                            pt={3}
                        >
                            Currently enhancing the online store editor experience for merchants @ <a href="https://www.shopify.ca/" target="_blank" rel="noopener noreferrer" style={{'color': '#95BF47', 'text-decoration': 'none'}}>Shopify</a>.
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                display='flex'
                id='career-hobbies-container'
                pt={3}
            >
                <Box
                    id='career'
                >
                    <Box
                        color='white'
                        component={Typography}
                        id='as-a-header'
                    >
                        <span style={{'color': '#FF7E6B'}}>As a developer</span>
                    </Box>
                    <Box
                        color='white'
                        id='about-text-content'
                        pt={2}
                    >
                        Playing video games growing up stemmed my interest for development. Fast forward to 6 internships later, my love for coding has only grown.
                    </Box>
                    <Box
                        color='white'
                        id='about-text-content'
                        pt={2}
                    >
                        Development not only challenges me to think critically, but also allows me to tap into my creativity which is the aspect that I love the most about this career.
                    </Box>
                    <Box
                        color='white'
                        id='about-text-content'
                        pt={2}
                    >
                         Not only am I interested in full stack development, but I have a growing love for data. Data plays a crucial aspect in our everyday lives, it's a main factor that drives our society towards further innovation and is revolutionizing society. 
                    </Box>
                </Box>

                <Box
                    id='hobbies'
                    pt={2}
                >
                    <Box
                        color='white'
                        component={Typography}
                        id='as-a-header'
                    >
                        <span style={{'color': '#FDFD96'}}>As a person</span>
                    </Box>
                    <Box
                        color='white'
                        id='about-text-content'
                        pt={2}
                    >
                        As a first generation college student, this has opened my eyes to the amount of privilege that furthering your education is and how often we usually take it for granted. I hope to be able to sponsor my own scholarship in the future to help other first generation students pursue post-secondary.
                    </Box>
                    <Box
                        color='white'
                        id='about-text-content'
                        pt={2}
                    >
                        <Box>
                            During my free time:
                        </Box>
                        <Box
                            pl={1}
                        >
                            •&nbsp;&nbsp;&nbsp;💿&nbsp;&nbsp;collecting LP records
                        </Box>
                        <Box
                            pl={1}
                        >
                            •&nbsp;&nbsp;&nbsp;🥬&nbsp;&nbsp;aspiring vegetarian
                        </Box>
                        <Box
                            pl={1}
                        >
                            •&nbsp;&nbsp;&nbsp;🪡&nbsp;&nbsp;future embroidery entrepeneur
                        </Box>
                        <Box
                            pl={1}
                        >
                            •&nbsp;&nbsp;&nbsp;🏊&nbsp;&nbsp;ex-competitive swimmer
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        <Music/>
    </React.Fragment>
        );
}

export default About;

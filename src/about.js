/* React */
import React, {useState} from 'react';

/* Material UI */
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

/* Local Files */
import './about.css';
import Music from './music.js';
import Insights from './insights.js';

/* Photos */
import ErnestBefore from './images/ernest-before.jpg';
import ErnestAfter from './images/ernest-after.jpg';
import Spotilytics from './images/spotilytics.png';
import Blank from './images/blank.png';

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
                            <span style={{'color': '#FF7E6B'}}>About me</span>
                        </Box>
                        <Box
                            id='about-text-content'
                            pt={2}
                        >
                            I am a Toronto-based software engineer and Computer Science gradudate from the <a href="https://uwaterloo.ca/future-students/programs/computer-science" target="_blank" rel="noopener noreferrer" style={{'color': '#FF7E6B', 'text-decoration': 'none'}}>University of Waterloo</a>.
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
            
{/* <Box
            //     pt={5}
            //     display='flex'
            // >
            //     <Insights
            //         question='Why Software?'
            //         answer={['Playing video games growing up stemmed my interest for development. Development not only challenges me to think critically, but also allows me to tap into my creativity.']}
            //         background='#fcd1d1'
            //     />
            //     <Insights
            //         question='What Inspires You?'
            //         answer={['answer']}
            //         background='#ece2e1'
            //     />
            //     <Insights
            //         question='Fun Facts?'
            //         answer={['💿 - Collecting LP records', 'am an aspiring vegetarian, and hope to open up my own embroidery small business in the future. ']}
            //         background='#f6e2b3'
            //     />
            // </Box>*/}
        </Box>
        <Music/>
    </React.Fragment>
        );
}

export default About;

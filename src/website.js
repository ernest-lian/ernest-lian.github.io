
import React, {useState} from 'react';

/* Material-UI Components */
import { Box, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { makeStyles } from '@material-ui/core/styles';

import ErnestBefore from './images/ernest-before.jpg';
import ErnestAfter from './images/ernest-after.jpg';

import About from './about.js';

const styles = makeStyles({
    fontWeight: {
        'font-weight': 900
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
                justifyContent='center'
                pt={10}
            >
                <Box
                    alignSelf='center'
                    pr={10}
                >
                    <Box
                        component={Typography}
                        variant='h2'
                        color='white'
                        className={`${classes.typographyStyle} ${classes.fontWeight}`}
                    >
                        hi, i am <span style={{'color': '#FF7E6B'}}>Ernest.</span>
                    </Box>
                    <Box
                        component={Typography}
                        color='white'
                        variant='h7'
                    >
                        I study Computer Science at the University of Waterloo
                    </Box>
                    <Box
                        display='flex'
                        pt={3}
                    >
                        <Box
                            pr={2}
                        >
                            <LinkedInIcon color='primary' fontSize='large'/>
                        </Box>
                        <Box
                            pr={2}
                        >
                            <GitHubIcon color='primary' fontSize='large'/>
                        </Box>
                        <Box
                            pr={2}
                        >
                            <MailOutlineIcon color='primary' fontSize='large'/>
                        </Box>
                        <Box>
                            <InsertDriveFileIcon color='primary' fontSize='large'/>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component='img'
                    width='30%'
                    height='30%'
                    borderRadius='50%'
                    src={isBefore ? ErnestBefore : ErnestAfter}
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                    style={{objectFit: 'cover', border: '5px solid #FF7E6B'}}/>
            </Box>
            <About/>
        </React.Fragment>
    );
}

export default Website;

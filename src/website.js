
import React, {useState} from 'react';

/* Material-UI Components */
import { Box, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import ErnestBefore from './images/ernest-before.jpg';
import ErnestAfter from './images/ernest-after.jpg';

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
                pt={5}
            >
                <Box
                    alignSelf='center'
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
                        I am in my 4th year of Computer Science at the University of Waterloo
                    </Box>
                </Box>
                <Box
                    component='img'
                    width='400px'
                    height='400px'
                    borderRadius='50%'
                    src={isBefore ? ErnestBefore : ErnestAfter}
                    onMouseOver={handleHover}
                    onMouseOut={handleHover}
                    style={{objectFit: 'cover', border: '5px solid #FF7E6B'}}/>
            </Box>
        </React.Fragment>
    );
}

export default Website;

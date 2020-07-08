
import React, {useState} from 'react';

/* Material-UI Components */
import { Box, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    redBackground: {
        background: 'linear-gradient(45deg, #0d47a1 10%, #64b5f6 90%)',
        color: 'white',
        width: '15px',
        height: '15px',
        'border-radius': '50%'
    }
});

const Website = () => {
    const classes = styles();
    const [isBefore, setIsBefore] = useState(false);
    const [activePage, setActivePage] = useState(-1);

    const handleHover = () => setIsBefore(!isBefore);

    return (
        <React.Fragment>
            <Box
                component={Typography}
                variant='h6'
                color='primary'
                className={`${classes.typographyStyle} ${classes.noFontWeight}`}
                alignSelf='center'
                pt={2}
            >
                hi!
            </Box>
        </React.Fragment>
    );
}

export default Website;

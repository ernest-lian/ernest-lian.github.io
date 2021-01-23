import React from 'react';

import { Box, Typography } from '@material-ui/core';

const Song = () => {
    return(
        <Box>
            song
        </Box>
    )
}

const Music= () => {
    
    return(
        <Box
            component={Typography}
            color='white'
            style= {{
                'font-size': '50px',
                'padding-left': '1em'
            }}
        >
            fave tunes
            <Song/>
        </Box>
    )
}

export default Music;

import React from 'react';

import ErnestBefore from './images/ernest-before.jpg';

import { Box, Typography } from '@material-ui/core';

const Song = () => {
    return(
        <Box
            display='flex'
        >
            <Box
                component='img'
                src={ErnestBefore}
            />

            <Box
                display='flex'
                flexDirection='column'
            >
                <Box>
                    Song title
                </Box>
                <Box>
                    Song artist
                </Box>
            </Box>
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

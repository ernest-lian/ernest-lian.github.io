import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { map } from 'lodash';

import './music.css';

const topSongs = {
    1: {
        'artist': 'sza',
        'title': 'good days',
        'cover': 'https://i.scdn.co/image/ab67616d00001e023097b1375ab17ae5bf302a0a'
    },
    2: {
        'artist': 'ariana grande',
        'title': 'just like magic',
        'cover': 'https://i.scdn.co/image/ab67616d00001e025ef878a782c987d38d82b605'
    },
    3: {
        'artist': 'troye sivan',
        'title': 'rager teenager',
        'cover': 'https://i.scdn.co/image/ab67616d00001e021121a528557155240feb9273'
    }
}

const Song = () => {
    return map(topSongs , (songDetails, index) => {
        console.log('hello: ', songDetails)
        return(
            <Box
                key={index}
                display='flex'
                flexDirection='row'
                p={4}
            >
                <Box
                    component='img'
                    borderRadius='10%'
                    src={songDetails['cover'] }
                    width='100px'
                    height='100px'
                    mr={2}
                />
                <Box
                    component={Typography}
                    display='flex'
                    alignItems='center'
                    variant='h1'
                >
                    {index}
                </Box>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    ml={2}
                >
                    <Box
                        component={Typography}
                        style= {{
                            'font-size': '12px'
                        }}
                        color='white'
                    >
                        {songDetails['title']}
                    </Box>
                    <Box
                        component={Typography}
                        style= {{
                            'font-size': '12px'
                        }}
                    >
                        {songDetails['artist']}
                    </Box>
                </Box>
            </Box>
        )
}
    )
}

const Music= () => {
    
    return(
        <Box
            className='fave-tunes-container'
            component={Typography}
            color='white'
            style= {{
                'font-size': '20px'
            }}
        >
            current tunes
            <Box
                className='fave-tunes'
                display='flex'
            >
                <Song/>
            </Box>
        </Box>
    )
}

export default Music;

import React from 'react';

import { Box, Typography } from '@material-ui/core';
import { map } from 'lodash';

import './music.css';

const topSongs = {
    1: {
        'artist': 'sza',
        'title': 'good days',
        'cover': 'https://i.scdn.co/image/ab67616d00001e023097b1375ab17ae5bf302a0a',
        'url': 'https://open.spotify.com/track/3YJJjQPAbDT7mGpX3WtQ9A?si=-5-E-3HeQie2XOF-6zvmFQ'
    },
    2: {
        'artist': 'ariana grande',
        'title': 'test drive',
        'cover': 'https://i.scdn.co/image/ab67616d00001e025ef878a782c987d38d82b605',
        'url': 'https://open.spotify.com/track/3eZYOQO4UzKrUDYDghtnFw?si=W9_x07UzTkelmO0AAAwWhw'
    },
    3: {
        'artist': 'troye sivan',
        'title': 'rager teenager!',
        'cover': 'https://i.scdn.co/image/ab67616d00001e021121a528557155240feb9273',
        'url': 'https://open.spotify.com/track/26xSz7VJP1AERCJfgaXeMZ?si=LM7TqeayQuW992gQ1hJYIw'
    }
}

const Song = () => {
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    return map(topSongs , (songDetails, index) => {
        return(
            <Box
                key={index}
                display='flex'
                flexDirection='row'
                p={4}
                onClick={() => openInNewTab(songDetails['url'])}
                className='song-details-container'
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
            color='white'
            style= {{
                'font-family': 'Lato, sans-serif',
                'font-weight': 'bold',
                'font-size': '30px'
            }}
            pt={10}
            pb={10}
        >
            SONGS I CURRENTLY LOVE
            <Box
                id='fave-tunes'
                display='flex'
            >
                <Song/>
            </Box>
        </Box>
    )
}

export default Music;

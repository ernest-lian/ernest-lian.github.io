import React from 'react';

import ErnestBefore from './images/ernest-before.jpg';

import { Box, Typography } from '@material-ui/core';
import { map } from 'lodash';

const TopSongs = {
    1: {
        'artist': 'ariana grande',
        'title': 'better off'
    },
    2: {
        'artist': 'ariana grande',
        'title': 'better off'
    },
    3: {
        'artist': 'ariana grande',
        'title': 'better off'
    },
    4: {
        'artist': 'ariana grande',
        'title': 'better off'
    },
    5: {
        'artist': 'ariana grande',
        'title': 'better off'
    }
}

const Song = () => {
    map(topSongs , (songDetails, index) => {
    // return(
    //     <Box
    //         // key={index}
    //         display='flex'
    //         flexDirection='row'
    //         width='450px'
    //         p={4}
    //     >
    //         <Box
    //             component='img'
    //             borderRadius='10%'
    //             src={ErnestBefore}
    //             width='100px'
    //             height='100px'
    //             mr={2}
    //         />
    //         <Box
    //             component={Typography}
    //             display='flex'
    //             alignItems='center'
    //             variant='h1'
    //         >
    //             {1}
    //         </Box>
    //         <Box
    //             display='flex'
    //             flexDirection='column'
    //             justifyContent='center'
    //             ml={2}
    //         >
    //             <Box
    //                 component={Typography}
    //                 variant='h5'
    //                 color='white'
    //             >
    //                 better off
    //             </Box>
    //             <Box
    //                 component={Typography}
    //                 variant='h6'
    //             >
    //                 ariana grande
    //             </Box>
    //         </Box>
    //     </Box>
    // )
}
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

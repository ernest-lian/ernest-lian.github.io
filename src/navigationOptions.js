import React, { useState } from 'react';
import { map } from 'lodash';
import {
    Link
} from "react-router-dom";

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    hoverNavigation: {
        "&:hover": {
            color: '#ffb3b3'
        }
    },
    selectedNavigation: {
        "&:hover": {
            color: '#ffb3b3'
        },
        "color": 'orange'
    }
});

const NavigationOptions = () => {
    const classes = styles();
    const [page, setPage] = useState('')

    const handleCurrentPage = (currentPage) => {
        setPage(currentPage)
    }

    return (
        <Box
            display='flex'
            alignItems='center'
            ml={6}
        >
            <Link
                style={{'textDecoration': 'none'}}
                to={'/home'}
            >
                <Box
                    component={Typography}
                    variant='h6'
                    color='white'
                    onClick={()=> {handleCurrentPage('home')}}
                    whiteSpace='nowrap'
                >
                    ernest lian
                </Box>
            </Link>
            <Box
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='flex-end'
                mr={8}
            >
                <Link
                    style={{'textDecoration': 'none'}}
                    to={'/about'}
                >
                    <Box
                        component={Typography}
                        variant='h6'
                        color='white'
                        className={(page === 'about') ? classes.selectedNavigation : classes.hoverNavigation}
                        onClick={()=> {handleCurrentPage('about')}}
                    >
                        {'about me'}
                    </Box>
                </Link>
            </Box>
        </Box>
    );
}

export default NavigationOptions;

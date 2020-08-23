import React, { useState } from 'react';
import { map } from 'lodash';
import {
    Link
} from "react-router-dom";

import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { NAVIGATION_SELECTIONS } from './constants/navigation';

const styles = makeStyles({
    hoverNavigation: {
        "&:hover": {
            color: 'orange'
        }
    },
    selectedNavigation: {
        "&:hover": {
            color: 'orange'
        },
        borderBottom: 'orange solid 3px'
    }
});

const NavigationOptions = () => {
    const classes = styles();
    const [page, setPage] = useState('')

    const handleCurrentPage = (currentPage) => {
        setPage(currentPage)
    }

    return map(NAVIGATION_SELECTIONS, (option) => {
        return (
            <li
            >
                <Link
                    style={{'textDecoration': 'none'}}
                    to={'/'+option}
                >
                    <Box
                        component={Typography}
                        variant='h6'
                        color='white'
                        className={(page === option) ? classes.selectedNavigation : classes.hoverNavigation}
                        alignSelf='center'
                        pt={2}
                        onClick={()=> {handleCurrentPage(option)}}
                    >
                        {option}
                    </Box>
                </Link>
            </li>
        );
    })
}

export default NavigationOptions;

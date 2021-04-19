/* React */
import React, { useState } from 'react';

/* Router */
import {
    Link
} from "react-router-dom";

/* Material-UI */
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';

const styles = makeStyles({
    hoverNavigation: {
        "&:hover": {
            color: 'rgb(204, 198, 187)'
        }
    },
    selectedNavigation: {
        "&:hover": {
            color: 'rgb(204, 198, 187)'
        },
        "color": 'orange'
    }
});

const NavigationOptions = () => {
    const classes = styles();
    const [page, setPage] = useState('')
    const [showHomeIcon, setShowHomeIcon] = useState(false)

    const handleCurrentPage = (currentPage) => {
        setPage(currentPage)
    }

    const handleShowHomeIcon = () => setShowHomeIcon(!showHomeIcon);

    return (
        <Box
            display='flex'
            alignItems='center'
        >
            <Link
                style={{'textDecoration': 'none'}}
                to={'/home'}
            >
                <Box
                    display='flex'
                >
                    <Box
                        color='white'
                        onClick={()=> {handleCurrentPage('home')}}
                        whiteSpace='nowrap'
                        style= {{
                            'font-family': 'Raleway, sans-serif'
                        }}
                        pr={1}
                        onMouseOver={handleShowHomeIcon}
                        onMouseOut={handleShowHomeIcon}
                    >
                        ernest
                    </Box>
                    {showHomeIcon ? <FontAwesomeIcon icon={faHome} size='1x' color='grey'/> : null}
                </Box>
            </Link>
            <Box
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='flex-end'
            >
                <Link
                    style={{'textDecoration': 'none'}}
                    to={'/about'}
                >
                    <Box
                        color='white'
                        className={(page === 'about') ? classes.selectedNavigation : classes.hoverNavigation}
                        onClick={()=> {handleCurrentPage('about')}}
                        style= {{
                            'font-family': 'Lato, sans-serif'
                        }}
                    >
                        About
                    </Box>
                </Link>
            </Box>
        </Box>
    );
}

export default NavigationOptions;

/* React */
import React, { useState } from 'react';

/* Router */
import {
    Link
} from "react-router-dom";

/* Material-UI */
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

/* FontAwesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './navigationOptions.css';

const styles = makeStyles({
    hoverNavigation: {
        "&:hover": {
            color: 'orange'
        }
    },
    selectedNavigation: {
        "&:hover": {
            color: 'rgb(204, 198, 187)'
        },
        "color": '#95BF47'
    }
});

const NavigationOptions = () => {
    const classes = styles();
    const [page, setPage] = useState('')
    const [showHomeIcon, setShowHomeIcon] = useState(false)
    const [showProfileIcon, setShowProfileIcon] = useState(false)

    const handleCurrentPage = (currentPage) => {
        setPage(currentPage)
    }

    const handleShowHomeIcon = () => setShowHomeIcon(!showHomeIcon);
    const handleShowProfileIcon = () => setShowProfileIcon(!showProfileIcon);

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
                        color='black'
                        className={(page === 'home') ? classes.selectedNavigation : classes.hoverNavigation}
                        onClick={()=> {handleCurrentPage('home')}}
                        whiteSpace='nowrap'
                        style= {{
                            'font-family': 'Raleway, sans-serif'
                        }}
                        id='ernest'
                        pr={1}
                        onMouseOver={handleShowHomeIcon}
                        onMouseOut={handleShowHomeIcon}
                    >
                        Ernest Lian
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
                        display='flex'
                    >
                        <Box
                            color='black'
                            className={(page === 'about') ? classes.selectedNavigation : classes.hoverNavigation}
                            onClick={()=> {handleCurrentPage('about')}}
                            style= {{
                                'font-family': 'Lato, sans-serif'
                            }}
                            id='about-me'
                            pr={1}
                            onMouseOver={handleShowProfileIcon}
                            onMouseOut={handleShowProfileIcon}
                        >
                            About
                        </Box>
                    </Box>
                </Link>
            </Box>
        </Box>
    );
}

export default NavigationOptions;

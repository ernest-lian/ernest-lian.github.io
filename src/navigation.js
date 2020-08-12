import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { Box, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigationOptions from './navigationOptions.js';


const styles = makeStyles({
    appBarStyle: {
        backgroundColor: 'black',
        paddingBottom: '20px'
    },
    hoverNavigation: {
        "&:hover": {
            borderBottom: '#FF7E6B solid 3px'
        }
    },
    selectedNavigation: {
        borderBottom: 'black solid 3px'
    },
    typographyStyle: {
        flex: 1,
        'padding-left': '50px',
        color: '#FF7E6B'
    },
    noFontWeight: {
        fontWeight: 100
    }
});

const Navigation = () => {
    const classes = styles();
    return(
    <Box
        display='flex'
        flexDirection='column'
        height='100%'
        width='100%'
    >
        <Router>
            <Box
                pb={10}
            >
                <AppBar
                    position='fixed'
                    className={classes.appBarStyle}
                >
                    <Box
                        display='flex'
                        justifyContent='space-around'
                        alignItems='center'
                    >
                        <Box>
                            <Box
                                component={Typography}
                                variant='h6'
                                color='primary'
                                className={`${classes.typographyStyle} ${classes.noFontWeight}`}
                                alignSelf='center'
                                pt={2}
                            >
                                ernest lian
                            </Box>
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                        >
                            <ul
                                style={{'display':'flex', 'listStyleType': 'none', 'alignItems': 'center'}}
                            >
                                <NavigationOptions/>
                            </ul>
                        </Box>
                    </Box>
                </AppBar>
            </Box>

            <Box>
                <Switch>
                    <Route path="/about">
                    </Route>
                </Switch>
            </Box>
        </Router>
    </Box>);
}

export default Navigation;

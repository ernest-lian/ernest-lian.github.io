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
    selectedNavigation: {
        borderBottom: 'black solid 3px'
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
            >
                {/* <AppBar
                    position='fixed'
                    className={classes.appBarStyle}
                > */}
                    <ul
                        style={{
                            'display':'flex', 
                            'listStyleType': 'none', 
                            'alignItems': 'center',
                            'justifyContent': 'space-around',
                            'padding-inline-start': '0px'
                        }}
                    >
                        <NavigationOptions/>
                    </ul>
                {/* </AppBar> */}
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

/* React */
import React from 'react';

/* Routing */
import {
    HashRouter,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

/* Material-UI */
import { Box, Typography } from '@material-ui/core';
import NavigationOptions from './navigationOptions.js';

/* Local files */
import Website from './website.js';
import About from './about.js';

const Navigation = () => {
    return(
    <Box
        display='flex'
        flexDirection='column'
        height='100%'
        width='100%'
    >
        <HashRouter>
            <Box
                style={{
                    'background-color': '#181818',
                    'position': 'fixed',
                    'top': '0',
                    'width': '100%',
                    'z-index': '1'
                }}
                p={4}
            >
                <NavigationOptions/>
            </Box>

            <Box>
                <Switch>
                    <Route path="/" exact component={Website}/>
                    <Route path="/home" component={Website}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Box>
        </HashRouter>
    </Box>);
}

export default Navigation;

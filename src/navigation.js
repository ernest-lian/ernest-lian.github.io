/* React */
import React from 'react';

/* Routing */
import {
    HashRouter,
    Switch,
    Route
  } from "react-router-dom";

/* Material-UI */
import { Box } from '@material-ui/core';
import NavigationOptions from './navigationOptions.js';

/* Local files */
import Website from './website.js';
import About from './about.js';

import './navigation.css';

const Navigation = () => {
    return(
    <Box
        display='flex'
        flexDirection='column'
        height='100%'
        width='100%'
        id='page'
    >
        <HashRouter>
            <Box
                pt={4}
                pb={4}
                id='navigation-bar'
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

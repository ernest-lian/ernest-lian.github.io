import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { Box } from '@material-ui/core';
import NavigationOptions from './navigationOptions.js';

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
            >
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

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
import Footer from './footer.js';
import Synthesize from './synthesize.js';
import Spotilytics from './spotilytics.js';

import './navigation.css';

const Content = () => {
    return(
    <Box
        display='flex'
        flexDirection='column'
        height='100%'
        width='100%'
    >
        <Box
            id='window-bar'
        >
            <span id="red-dot"></span>
            <span id="yellow-dot"></span>
            <span id="green-dot"></span>
        </Box>
        <HashRouter>
            <Box
                pt={4}
                pb={4}
                id='navigation-bar'
            >
                <NavigationOptions/>
            </Box>

            <Box
            >
                <Switch>
                    <Route path="/" exact component={Website}/>
                    <Route path="/home" component={Website}/>
                    <Route path="/about" component={About}/>
                    <Route path="/synthesize" component={Synthesize}/>
                    <Route path="/spotilytics" component={Spotilytics}/>
                </Switch>
            </Box>
        </HashRouter>
        <Footer/>
    </Box>);
}

export default Content;

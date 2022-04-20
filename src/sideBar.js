/* React */
import React from 'react';

/* Material-UI */
import { Box } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from "@material-ui/core/styles";

/* Local Images */
import News from './images/news.png';
import Facetime from './images/facetime.png';
import Mail from './images/mail.png';
import Message from './images/message.png';
import Map from './images/map.png';
import Calendar from './images/calendar.png';
import Notes from './images/notes.png';


import Github from './images/github.png';
import Linkedin from './images/linkedin.png';
import Gmail from './images/gmail.png';

/* Local Files Styling */
import './sideBar.css';

const BlueTooltip = withStyles({
tooltip: {
    backgroundColor: "#0072b1"
}
})(Tooltip);

const BlackTooltip = withStyles({
tooltip: {
    backgroundColor: "#000000"
}
})(Tooltip);

const RedTooltip = withStyles({
    tooltip: {
        backgroundColor: "#EA4335"
    }
    })(Tooltip);

const SideBar = () => {
    return (
        <React.Fragment>
            <Box
                display='flex'
                justifyContent='space-between'
                flexDirection='column'
                id='side-bar'
            >
                <Box
                    component='img'
                    width='100%'
                    src={News}
                    class='side-bar-icons'
                />
                <Box
                    component='img'
                    width='100%'
                    src={Facetime}
                    class='side-bar-icons'
                />
                <Box
                    component='img'
                    width='100%'
                    src={Mail}
                    class='side-bar-icons'
                />
                <BlueTooltip title="LinkedIn" placement="left">
                    <a href='https://www.linkedin.com/in/ernest-lian/' rel="noopener noreferrer" target='_blank'>
                        <Box
                            component='img'
                            width='100%'
                            src={Linkedin}
                            class='information-icons'
                        />
                    </a>
                </BlueTooltip>
                <BlackTooltip title="Github" placement="left">
                    <a href='https://github.com/ernest-lian' rel="noopener noreferrer" target="_blank">
                        <Box
                            component='img'
                            width='100%'
                            src={Github}
                            class='information-icons'
                        />
                    </a>
                </BlackTooltip>
                <RedTooltip title="Email" placement="left">
                    <a href='mailto: ernestclian@gmail.com'>
                        <Box
                            component='img'
                            width='100%'
                            src={Gmail}
                            id='gmail-icon'
                        />
                    </a>
                </RedTooltip>
                <Box
                    component='img'
                    width='100%'
                    src={Message}
                    class='side-bar-icons'
                />
                <Box
                    component='img'
                    width='100%'
                    src={Map}
                    class='side-bar-icons'
                />
                <Box
                    component='img'
                    width='100%'
                    src={Calendar}
                    class='side-bar-icons'
                />
                <Box
                    component='img'
                    width='100%'
                    src={Notes}
                    class='side-bar-icons'
                />
            </Box>
        </React.Fragment>
    );
}

export default SideBar;

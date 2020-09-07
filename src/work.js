import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import Paper from '@material-ui/core/Paper';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import './work.css';

const styles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    fontWeight: {
        'font-weight': 900
    },
    halfBackground: {
        'background': 'linear-gradient(to top, orange 50%, transparent 0%)'
    }
  }));

const Work = () => {
    const classes = styles();

    return (
    <Box
    >
        <Box
            component={Typography}
            variant='h2'
            color='white'
            className={`${classes.halfBackground} ${classes.fontWeight}`}
            display='flex'
            justifyContent='center'
        >
            Timeline
        </Box>
        <Box
            bgcolor='orange'
        >
            <ul
            >
                <li
                    className='timeline-item'
                >
                    <Box
                        className='timeline-item-date'
                        color='white'
                    >
                        <Typography variant="body2" color="white">
                            Sep - Dec 2020
                        </Typography>
                    </Box>
                    <Box
                        display='flex'
                        flexDirection='column'
                        style ={{ 'padding': '0 2em 0 2em'}}
                    >
                        <WorkOutlineIcon
                            color='primary'
                        />
                        <span
                            style={{ 
                                        'background-color': 'rgb(61, 66, 69)', 
                                        'width': '2px',
                                        'flex-grow': '1',
                                        'align-self': 'center'
                                    }}
                        ></span>
                    </Box>
                    <Box
                        className='timeline-item-container'
                    >
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                            Shopify
                            </Typography>
                            <Typography>Backend Developer</Typography>
                            
                            <Box
                                className='timeline-item-date-mobile'
                            >
                                <Typography variant="body2" color="white">
                                    Sep - Dec 2020
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </li>
            </ul>
        </Box>
    </Box>
        );
}

export default Work;

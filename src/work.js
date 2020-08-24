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
    }
  }));

const Work = () => {
    const classes = styles();

    return (
    <Box
    >
        <Box
            display='flex'
            justifyContent='center'
            style={{'padding-top': '2em'}}
        >
            <Box
                component={Typography}
                variant='h6'
                color='white'
                style={{'border-bottom': '3px solid orange'}}
            >
                TIMELINE
            </Box>
        </Box>
        <Box>

        </Box>
        <Timeline id='timeline thingie' align="alternate">
        <TimelineItem
            className='timeline-item'
        >
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    Sep - Dec 2020
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color='primary'>
                <WorkOutlineIcon
                    color='white'
                />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Shopify
                </Typography>
                <Typography>Backend Developer</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem
            className='timeline-item'
        >
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                Jan - Apr 2020
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary">
                <WorkOutlineIcon
                    color='white'
                />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                StackAdapt
                </Typography>
                <Typography>Software Engineer</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem
            className='timeline-item'
        >
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                May - Aug 2019
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary">
                <WorkOutlineIcon
                    color='white'
                />
            </TimelineDot>
            <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Lifion by ADP
                </Typography>
                <Typography>Software Engineer</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem
            className='timeline-item'
        >
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                Sep - Dec 2018
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary">
                <WorkOutlineIcon
                    color='white'
                />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Bespoke Metrics
                </Typography>
                <Typography>Backend Developer</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem
            className='timeline-item'
        >
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                Jan - Apr 2018
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary">
                <WorkOutlineIcon
                    color='white'
                />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                OpenText Corporation
                </Typography>
                <Typography>Software Developer</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem
            className='timeline-item'
        >
        <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                Jan - Apr 2017
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary">
                <WorkOutlineIcon
                    color='white'
                />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Ultimate Software
                </Typography>
                <Typography>Software Testing Engineer</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem
            className='timeline-item'
        >
            <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                Waterloo, Canada
            </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot color="primary">
                <AccountBalanceIcon
                    color='white'
                />
            </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                Enrolled at University of Waterloo
                </Typography>
                <Typography>Bachelor of Computer Science - Business Option</Typography>
            </Paper>
            </TimelineContent>
        </TimelineItem> */}
        </Timeline>
    </Box>
        );
}

export default Work;

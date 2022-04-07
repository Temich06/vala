import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'

import { mainTheme } from '../../styles'

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'white',
        marginRight: 15,
        marginLeft: 15,
        padding: 10,
        minHeight: 190,
        [theme.breakpoints.down('xs')]: {
            padding: 5,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 10
        },
        borderRadius: 20,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    title: {
        color: 'black',
    },
}));
const CardNewBlog = ({ number, text_bottom }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h3" className={classes.title}>
                {number}
            </Typography>
            <Typography variant="body1" className={classes.title}>
                {text_bottom}
            </Typography>
        </Box>
    );
}

export default CardNewBlog
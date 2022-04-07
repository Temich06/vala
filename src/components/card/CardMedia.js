import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        },
        minHeight: 500,
        color: '#313131'
    },
    content: {
        padding: 20,
    },
    img: {
        width: '100%',
        height: '80%',
        borderRadius: 5,
        [theme.breakpoints.down('xs')]: {
            width: '100%',

        },
    },
}));
const CardMedia = ({ img, description, title }) => {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <Box className={classes.root}>
            <img src={img} className={classes.img} />
            <Box className={classes.content}>
                <Typography variant="h6" style={{ fontWeight: 600, fontStyle: 'normal' }}>{title}</Typography>
                <Typography variant="body1" style={{ marginTop: 10 }}>{description}</Typography>
            </Box>
        </Box>
    );
}

export default CardMedia
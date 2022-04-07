import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, CardMedia, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
        width: 200,
        marginRight: 15,
        marginLeft: 5,
        padding: 10,
        height: 270,
        [theme.breakpoints.down('xs')]: {
            padding: 5,
        },
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: '80%',
        borderRadius: 5,
        [theme.breakpoints.down('xs')]: {
            width: '100%',

        },
    },
    cardContent: {
        width: '100%',
    },
    infoBlock: {
        display: 'flex'
    },
    tagsBlock: {
        display: 'flex',
        marginLeft: '-5px',
        flexWrap: 'wrap',
    },
    title: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }
}));
const CardNewBlog = ({ img, description, title, id, date }) => {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <Box className={classes.root}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={img}
                className={classes.img}
            />
            <Box className={classes.cardContent}>
                <Typography variant="body2" className={classes.title}>
                    {title}
                </Typography>
                <Button >Перейти</Button>
            </Box>
        </Box>
    );
}

export default CardNewBlog
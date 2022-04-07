import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, CardMedia, CardActionArea } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 20,
        boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    mainBlock: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        padding: 10,
        [theme.breakpoints.down('xs')]: {
            padding: 5,
            flexDirection: 'column'

        },
    },
    img: {
        width: 200,
        height: 178,
        borderRadius: 5,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    cardContent: {
        marginLeft: 10,
        width: '100%',
        height: 178,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
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
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    tag: {
        color: '#7bd094',
        '&:hover': {
            color: "#3a8762",
        },
        width: 'max-content'
    }
}));
const Card = ({ img, description, title, id, date, tag }) => {
    const classes = useStyles();
    const navigate = useNavigate()
    const newDate = new Date(date).toLocaleDateString()
    return (
        <Box className={classes.root}>
            <CardActionArea
                className={classes.mainBlock}
                onClick={() => navigate(`/news-inside/${id}`)}
            >
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={img}
                    className={classes.img}
                />
                <Box className={classes.cardContent}>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                        {newDate}
                    </Typography>
                    {tag.map((item, index) => <Typography key={index} variant="body2" className={classes.tag}>{item.name}</Typography>)}
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </Box>
            </CardActionArea>
        </Box>
    );
}

export default Card
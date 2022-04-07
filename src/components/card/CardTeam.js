import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: '90%',
        backgroundColor: 'white',
        marginTop: 30,
        margin: '0 auto',
        '&:focus': {
            outline: "none",
        },
        height: 200,
        textAlign: 'center'
    },
});

export default function CardTeam({ img, title, description }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="p" style={{ color: '#F2A340' }}>
                    {title}
                </Typography>
                {description.map((item, index) => (
                    <Typography key={index} variant="body1" component="p" style={{ marginTop: 5, color: 'rgba(49, 49, 49, 0.55)' }}>
                        {item}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}
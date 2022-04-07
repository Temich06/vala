import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Link, MenuItem } from '@material-ui/core'
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        height: 'max-content',
        marginTop: 20,
    },
    textBox: {
        padding: '10px 20px 20px 20px',
        height: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '80%',
        textAlign: 'center'
    },
    imgStyle: {
        height: 200,
        borderRadius: 20,
    },
    LinkStyles: {
        color: '#4E649E',
        marginTop: 10,
        alignItems: 'center',
        textDecoration: 'none',
    },
}))

const CardUsefulLink = ({ img, description, link }) => {
    const classes = useStyles()
    return (
        <Box className={classes.card}>
            <img src={img} className={classes.imgStyle} alt="" />
            <Box className={classes.textBox}>
                <Typography variant="body1">{description}</Typography>
                <a className={classes.LinkStyles} href={link}>
                    <MenuItem>
                        Перейти
                    </MenuItem>
                </a>
            </Box>
        </Box>
    )
}

export default CardUsefulLink
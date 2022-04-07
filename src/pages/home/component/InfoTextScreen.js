import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainTheme } from '../../../styles'
import { Button } from '../../../components'
import TextInfo from '../../../Data/TextInfo'

import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        background: `url("/image/Vector158.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        marginBottom: 50,
        marginTop: 100,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
            background: '#F2A340',
            paddingTop: 0,
            marginBottom: 80
        },
        display: 'flex',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 100
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_box: {
        [theme.breakpoints.down('sm')]: {
            marginTop: 25,
            marginBottom: 25
        },
    },
    text_box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 10
        },
    },
    infoBlock: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        [theme.breakpoints.down('md')]: {
            marginTop: 50
        },
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0
        },
    },
    title: {
        color: 'white',
        marginBottom: 20,
        fontStyle: 'normal',
        [theme.breakpoints.down('xs')]: {
            fontSize: 35
        },
    },
    description: {
        fontStyle: 'normal',
        marginTop: 10,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        },
    }
}));

const InfoTextScreen = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <div className={classes.container}>
            <Container>
                <Grid container className={classes.content}>
                    <Grid item lg={6} sm={11} md={5} xl={6} xs={11} className={classes.img_box}>
                        <img src={'/image/Medical-care-rafiki1.png'} alt={''} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item lg={6} sm={11} md={6} xl={6} xs={11} className={classes.infoBlock}>
                        {TextInfo.map((item, index) => (
                            <Typography variant="body1" className={classes.description} key={index}>
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default InfoTextScreen
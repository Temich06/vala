import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainTheme } from '../../../styles'
import { Button } from '../../../components'

import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        background: `url("/image/Vector57.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        minHeight: 700,
        marginBottom: 50,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 0,
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
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
        marginTop: 60
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
        [theme.breakpoints.down('xs')]: {
            fontSize: 16
        },
    }
}));

const StartedBlog = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    return (
        <div className={classes.container}>
            <Container>
                <Grid container className={classes.content}>
                    <Grid item lg={6} sm={11} md={6} xl={6} xs={11} className={classes.infoBlock}>
                        <Typography variant="h3" className={classes.title}>
                            ПАЛЛИАТИВНАЯ ПОМОЩЬ
                        </Typography>
                        <Typography variant="h6" className={classes.description}>
                            Сайт АНО "Комплексный центр медицинского и социального обслуживания населения". Общественный куратор отделения сестринского ухода РКБ№3. Проекты в поддержку развития паллиативной медицинской помощи в Якутии и спецпроекты по донорству.
                        </Typography>
                    </Grid>
                    <Grid item lg={6} sm={11} md={6} xl={6} xs={11} className={classes.img_box}>
                        <img src={'/image/Group81.png'} alt={''} style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default StartedBlog
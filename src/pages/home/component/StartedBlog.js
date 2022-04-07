import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { mainTheme } from '../../../styles'
import { Button } from '../../../components'

import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        background: `url("/image/Vector157.png")`,
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
            marginTop: 40
        },
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 0
        },
        marginTop: 40
    },
    title: {
        color: 'white',
        marginBottom: 20,
        fontStyle: 'normal',
        textShadow: ' 0px 0px 10px rgba(150, 150, 150, 1);',
        [theme.breakpoints.down('xs')]: {
            fontSize: 35
        },
    },
    description: {
        fontStyle: 'normal',
        textShadow: ' 0px 0px 10px rgba(150, 150, 150, 1);',
        paddingRight: 10,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            paddingRight: 0,
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
                        Помощь волонтёров
                        </Typography>
                        <Typography variant="h6" className={classes.description}>
                        Волонтёрство – это добровольная безвозмездная деятельность на благо общества и отдельных граждан. Если сформулировать определение не официальными терминами, то волонтерство – это бесплатная работа для того, чтобы помочь всем, кто в этом остро нуждается. Кстати, в 2021 году центр профориентации ПрофГид разработал точный тест на профориентацию. Он сам расскажет вам, какие профессии вам подходят, даст заключение о вашем типе личности и интеллекте.
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
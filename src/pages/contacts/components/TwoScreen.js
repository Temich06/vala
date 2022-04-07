import React from 'react'

import { Box, Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    span: {
        marginLeft: 20,
        color: '#378643'
    },
    gridInfo: {
        padding: 30,
        [theme.breakpoints.down('sm')]: {
            padding: 5
        },
        color: '#378643'
    },
    gridRoot: {
        boxShadow: '1px 2px 15px rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        padding: 20,
        [theme.breakpoints.down('md')]: {
            padding: 5
        },
    },
    gridImg: {
        background: 'radial-gradient(119.94% 119.94% at 20.13% 114.07%, rgba(173, 186, 255, 0.25) 0%, rgba(97, 216, 197, 0) 69.79%), linear-gradient(154.16deg, rgba(173, 186, 255, 0.5) 3.71%, rgba(97, 216, 197, 0) 94.54%), #ABEFE4;',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    container: {
        marginTop: 100
    }
}))

const TwoScreen = () => {
    const classes = useStyles()
    const data = [
        {
            label: 'Директор:',
            span: 'ФИО'
        },
        {
            label: 'e-mail:',
            span: 'г. Якутск, ул. Стадухина 81 корп. 1'
        },
        {
            label: 'e-mail:',
            span: 'rastaganstaniga1997@mail.ru'
        },
        {
            label: 'Сайт:',
            span: 'volunteer-activity.com'
        },
    ]
    return (
        <Container className={classes.container}>
            <Grid className={classes.gridRoot} container>
                <Grid className={classes.gridImg} item lg={5} xl={5} md={5} sm={12} xs={12}>
                    <img src={'/image/127.png'} style={{ width: '150%' }} />
                </Grid>
                <Grid className={classes.gridInfo} item lg={7} xl={7} md={7} sm={12} xs={12}>
                    <Typography variant="h4" style={{marginBottom: 20}}>Связь с волонтерской компанией</Typography>
                    {data.map((item, index) => (
                        <Typography variant="h6" style={{ fontWeight: 'normal', marginTop: 10 }} key={index}>{item.label}<span className={classes.span}>{item.span}</span></Typography>
                    ))}
                </Grid>
            </Grid>
        </Container>
    )
}

export default TwoScreen
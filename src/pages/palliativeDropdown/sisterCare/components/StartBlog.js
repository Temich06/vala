import React from 'react'

import { Container, Box, Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    wContainer: {
        background: 'linear-gradient(145.24deg, rgba(58, 113, 253, 0.25) 14.79%, rgba(183, 225, 255, 0) 61.66%), radial-gradient(46.05% 156.8% at 84.98% 128.33%, rgba(89, 106, 255, 0.25) 0%, rgba(68, 75, 255, 0) 100%), #B7E1FF',
        paddingBottom: 50
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 600,
        [theme.breakpoints.down('xs')]: {
            minHeight: 500
        },
    },
    title: {
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            fontSize: 55
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: 35
        }
    },
    image: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: 350
        },
        [theme.breakpoints.down('xs')]: {
            width: 300
        }
    },
    GridItem: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            textAlign: 'center'
        },
    },
    description: {
        color: '#2A5FA7',
        marginTop: 20,
        fontWeight: 'normal',
        lineHeight: '160%',
        fontStyles: 'normal',
        [theme.breakpoints.down('xs')]: {
            fontSize: 20
        }
    },
    span: {
        color: 'white',
        marginLeft: 15,
        fontSize: 30,
        fontWeight: 'bold',
    }
}));

const StartBlog = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wContainer}>
            <Container className={classes.container}>
                <Grid container>
                    <Grid item lg={6} xl={6} md={6} sm={12} xs={12} className={classes.GridItem}>
                        <Typography variant="h2" className={classes.title}>Отделение<br /> сестринского ухода </Typography>
                    </Grid>
                    <Grid item lg={6} xl={6} md={6} sm={12} xs={12} className={classes.GridItem}>
                        <img src="/image/Medicalcare-bro1.png" className={classes.image} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default StartBlog
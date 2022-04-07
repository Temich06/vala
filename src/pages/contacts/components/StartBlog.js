import React from 'react'

import { Container, Box, Grid, Typography } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    wContainer: {
        background: '#B9DCB8',
        paddingBottom: 50
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 600,
        textAlign: 'center'
    },
    title: {
        color: 'white',
        [theme.breakpoints.down('md')]: {
            fontSize: 40
        },
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
        alignItems: 'center',
        flexDirection: 'column'
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
                        <Typography variant="h3" className={classes.title}>Контактный телефон (мессенджеры): </Typography>
                        <Typography variant="h4" className={classes.title}>+7 (914) *** ** **</Typography>
                        <Box style={{ marginTop: 54 }}>
                            <Typography variant="h5" style={{ color: '#2A5FA7' }}>
                                ПН-ПТ :
                                <span className={classes.span}>08:00-19:00</span>
                            </Typography>
                            <Typography variant="h5" style={{ color: '#2A5FA7', marginTop: 10 }}>
                                ВС-СБ:
                                <span className={classes.span}>Выходные</span>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={6} xl={6} md={6} sm={12} xs={12} className={classes.GridItem}>
                        <img src="/image/undraw1.png" className={classes.image} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default StartBlog
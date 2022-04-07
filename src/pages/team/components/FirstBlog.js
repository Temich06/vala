import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: 200,
        color: 'black',
        paddingTop: 100
    },
    title__blue: {
        color: '#6658EA',
        textTransform: 'uppercase'
    },
    title: {
        marginBottom: 30,
        color: 'white',
    },
    line: {
        height: 65,
        border: "1px solid #DCE0F3",
        [theme.breakpoints.down('sm')]: {
            border: 'none',
            marginTop: 50
        },
    },
    Grid_Card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 10,
            marginBottom: 20
        },
    },
    Grid_Box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        backgroundColor: 'white',
        paddingTop: 40,
        paddingBottom: 40,
        borderRadius: 25,
        width: '90%'
    }
}));


const FirstBlog = () => {
    const classes = useStyles()
    let showChange = (param) => {
        if (window.innerWidth <= param) {
            return false
        } else {
            return true
        }
    }
    const object = [
        {
            description: 'официальных проекта с участием врачей и пациентов с 2014 г.',
            number: '9',
            show: showChange(599)
        },
        {
            description: 'добровольцев помогают нам с 2014 г.',
            number: '150',
            show: showChange(599)
        },
        {
            description: 'гранта ФПГ (через 2 НКО)',
            number: '3',
            show: showChange(960)
        },
        {
            description: 'проведено благотворительных фестиваля "Надежда на будущее"',
            number: '2',
            show: false,
        },
    ]
    return (
        <div>
            <Container className={classes.container}>
                <Typography variant="h3" className={classes.title}>Мы за совместные проекты врачебного и пациентского сообществ</Typography>
                <Grid container className={classes.Grid_Box}>
                    {object.map((item, index) => (
                        <Grid item className={classes.Grid_Card} key={index} lg={3} xl={3} sm={4} md={3} xs={6}>
                            <Box style={{ marginRight: 50, marginLeft: 50 }}>
                                <Typography variant="h4">
                                    {item.number}
                                </Typography>
                                <Typography style={{ color: 'gray' }}>
                                    {item.description}
                                </Typography>
                            </Box>
                            {item.show &&
                                < Box className={classes.line}>
                                </Box>
                            }
                        </Grid>
                    ))
                    }
                </Grid>
            </Container>
        </div >
    )
}

export default FirstBlog
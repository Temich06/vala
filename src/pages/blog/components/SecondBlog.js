import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography } from '@material-ui/core'

import DataBlog from '../../../Data/BlogData'
import { CardBlog, Button } from '../../../components'
import API from '../../../api'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 600,
        width: '100%',
        marginTop: 40,
        marginBottom: 20,
    },
    content: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 20
    },
    Grid: {
        width: '100%',
        height: 430,
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))

const SecondBlog = () => {
    const [change, setChange] = useState(true)
    const [posts, setPosts] = useState([])
    const classes = useStyles()
    const added = () => {
        document.getElementById('Content2').style.overflow = 'auto'
        document.getElementById('Content2').style.height = '100%'
        setChange(false)
    }
    const remove = () => {
        document.getElementById('Content2').style.overflow = 'hidden'
        document.getElementById('Content2').style.height = '430px'
        setChange(true)
    }
    useEffect(() => {
        API.getPosts('', 3).then((res) => {
            console.log(res)
            setPosts(res.data.results)
        })
    }, [])
    return (
        <Box className={classes.root}>
            <Box className={classes.titleBox}>
                <Typography variant="h5">СОЦИАЛЬНЫЕ НОВОСТИ</Typography>
                {change ?
                    <Button text="Покозать все" onClick={() => added()} />
                    : <Button text="Закрыть" onClick={() => remove()} />}
            </Box>
            <Grid container className={classes.Grid} id="Content2">
                {posts.map((item, index) => (
                    <Grid item lg={3} xl={3} sm={4} xs={10} md={3} style={{ marginTop: 20, }} key={index}>
                        <CardBlog key={index} img={item.title_image} title={item.title} description={item.description} id={item.id} date={item.date} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default SecondBlog
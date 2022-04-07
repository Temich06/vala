import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Typography, FormControl, InputLabel, MenuItem, Select, CircularProgress } from '@material-ui/core'

import DataBlog from '../../../Data/BlogData'
import { CardBlog, Button } from '../../../components'
import API from '../../../api'

const useStyles = makeStyles((theme) => ({
    root: {
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
        height: 440,
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
        alignItems: 'center',

    }
}))

const FullListScreen = () => {
    const [change, setChange] = useState(true)
    const [posts, setPosts] = useState([])
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(true)
    let currentTag
    const classes = useStyles()
    const added = () => {
        document.getElementById('Content').style.overflow = 'auto'
        document.getElementById('Content').style.height = '100%'
        setChange(false)
    }
    const remove = () => {
        document.getElementById('Content').style.overflow = 'hidden'
        document.getElementById('Content').style.height = '430px'
        setChange(true)
    }
    useEffect(() => {
        const getlist = async () => {
            await API.getTags().then((res) => {
                setTags(res.data)
            })
            await API.getPosts('', null, 1000).then((res) => {
                setLoading(true)
                setPosts(res.data.results)
                setLoading(false)
            })
        }
        getlist()
    }, [])
    const newGetList = () => {
        API.getPosts('', currentTag, 1000).then((res) => {
            setPosts(res.data.results)
        })
    }
    return (
        <Box style={{ width: '100%' }}>
            <FormControl style={{ width: 200 }}>
                <InputLabel id="demo-simple-select-label">Фильтр по тегам</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentTag || ''}
                    onChange={(e) => {
                        currentTag = e.target.value
                        newGetList()
                    }}
                >
                    {tags.map((res, index) => (
                        <MenuItem key={index} value={res.id}>{res.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box className={classes.root}>
                <Box className={classes.titleBox}>
                    <Typography variant="h5">Все новости</Typography>
                    {change ?
                        <Button text="Покозать все" onClick={() => added()} />
                        : <Button text="Закрыть" onClick={() => remove()} />}
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>{loading && <CircularProgress style={{ marginTop: 50 }} />}</Box>
                <Grid container className={classes.Grid} id="Content">
                    {posts.map((item, index) => (
                        <Grid item lg={3} xl={3} sm={4} xs={10} md={3} style={{ marginTop: 20, }} key={index}>
                            <CardBlog key={index} img={item.title_image} title={item.title} description={item.description} id={item.id} date={item.date} tag={item.tags} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default FullListScreen
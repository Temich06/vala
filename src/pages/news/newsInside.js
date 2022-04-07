import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../../components/layout'
import { Box, Container, Typography, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate } from 'react-router-dom'

import API from '../../api'

const useStyles = makeStyles(() => ({
    container: {
        paddingTop: 50,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    image: {
        width: '50%',
        objectFit: 'cover',
    },
    dateStyle: {
        marginBottom: 30,
        marginTop: 20,
    },
    tagStyle: {
        cursor: 'pointer',
        color: '#7bd094',
        '&:hover': {
            color: "#3a8762",
        },
    },
    box: {
        border: '0.5px solid gray',
        width: '50%',
        padding: '10px 20px 20px 20px',
        marginBottom: 100
    }
}))

const BlogInside = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [body, setBody] = useState()
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [tags, setTags] = useState([])
    const [foreign, setForeign] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    useEffect(() => {
        API.getPostsDetail(params.id).then((res) => {
            setBody(res.data.body)
            setTitle(res.data.title)
            setDate(new Date(res.data.created).toLocaleDateString())
            setTags(res.data.tags)
            setForeign(res.data.foreign_posts)
            setLoading(false)
        })
    }, [])
    return (
        <Layout>
            <Container className={classes.container}>
                {loading && <Box style={{ margin: '0 auto' }}><CircularProgress style={{ marginTop: 50 }} /></Box>}
                <Typography variant="h4" >{title}</Typography>
                {tags.map((item, index) => (
                    <Typography key={index} variant="body1" className={classes.dateStyles}>{date}//<span className={classes.tagStyle}>{item.name}</span></Typography>
                ))}
                <div dangerouslySetInnerHTML={{ __html: body }}>

                </div>
                {foreign.length ?
                    <Box>
                        <Typography variant="h6">МАТЕРИАЛЫ ПО ТЕМЕ</Typography>
                        <Box className={classes.box}>
                            {foreign.length !== 0 ? foreign.map((item, index) => (
                                <Box key={index} style={{ marginTop: 10 }}>
                                    <Typography variant="body1" className={classes.tagStyle} onClick={() => {
                                        navigate(`/news-inside/${item.id}`)
                                        window.location.reload()
                                    }}>{item.title}</Typography>
                                    <Typography variant="body2">{item.tags[0].name}</Typography>
                                </Box>
                            )) : 'Нету материалов'}
                        </Box>
                    </Box>
                    : ''}
            </Container>
        </Layout >
    )
}

export default BlogInside
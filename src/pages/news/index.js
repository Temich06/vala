import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, CircularProgress } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import API from '../../api'
import { Layout, PageHeader } from '../../components'
import FirstBlog from './components/FirstBlog'
import NewsCardBlock from './components/NewsCardBlock'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 100
    },
}));

const Blog = () => {
    const classes = useStyles()
    const [news, setNews] = useState([])
    const [count, setCount] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [offset, setOffset] = useState()
    useEffect(() => {
        const getPosts = async () => {
            API.getPosts(currentPage, offset).then((res) => {
                setLoading(true)
                setNews(res.data.results)
                setCount(res.data.count)
                setLoading(false)
            })
        }
        getPosts()
    }, [currentPage])

    let countNumber = Math.ceil(count / 10)

    return (
        <Layout>
            <Container>
                <div className={classes.root}>
                    <PageHeader title="Новости" />
                    {loading && <CircularProgress style={{ marginTop: 50 }} />}
                    <NewsCardBlock data={news} />
                    <Pagination style={{ marginTop: 20 }} count={countNumber} onChange={(event, value) => setCurrentPage(value)} />
                </div>
            </Container>
        </Layout>
    )
}

export default Blog
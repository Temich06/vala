import React, { useEffect } from 'react'

import { Layout } from '../../components'
import { Container, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import NewBlog from './components/NewBlog'
import FullListScreen from './components/FullListScreen'
import SecondBlog from './components/SecondBlog'
import API from '../../api'

const useStyles = makeStyles(() => ({
    container: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    wrapperContainer: {

    }
}))

const Blog = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapperContainer}>
            <Layout>
                <Container className={classes.container}>
                    <FullListScreen />
                </Container>
            </Layout>
        </Box>
    )
}

export default Blog
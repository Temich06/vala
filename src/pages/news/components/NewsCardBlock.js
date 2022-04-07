import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardCustom from '../../../components/card/CardCustom'

const useStyles = makeStyles(() => ({
    title__yellow: {
        color: '#FFD439'
    },
    title: {
        marginBottom: 30
    },
}))

const NewsCardBlock = ({ data }) => {
    const classes = useStyles()
    console.log(data)
    return (
        <Container>
            <Grid container >
                {data ? data.map((item, index) => (
                    <Grid item key={index} lg={12} sm={12} md={12} xl={12} xs={12} className={classes.content}>
                        <CardCustom img={item.title_image} title={item.title} description={item.description} id={item.id} date={item.created} tag={item.tags} />
                    </Grid>
                )) : ''}
            </Grid>
        </Container>
    )
}

export default NewsCardBlock
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'

import { CardCommon } from '../components'

const useStyles = makeStyles(() => ({

}))

const CommonCardConstructor = ({ data }) => {
    const classes = useStyles()
    return (
        <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
            {data ? data.map((item, index) => (
                <Grid key={index} item lg={6} xl={6} md={6} sm={12} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <CardCommon key={index} title={item.title} price={item.price} description={item.description} />
                </Grid>
            )) : ''}
        </Grid>
    )
}

export default CommonCardConstructor
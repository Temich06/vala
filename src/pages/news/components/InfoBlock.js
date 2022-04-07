import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    text: {
        marginTop: 10,
        width: '70%'
    }
}))

const InfoBlock = ({ text }) => {
    const classes = useStyles()
    return (
        <Box className={classes.text}>
            <Typography variant="h6">{text}</Typography>
        </Box>
    )
}

export default InfoBlock
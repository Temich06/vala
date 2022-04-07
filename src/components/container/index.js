import React from 'react'

import { Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const MyContainer = ({ children, wrapper, bgImg, lg, md, xs, xl, sm, minHeight, ...props }) => {
    const useStyles = makeStyles((theme) => ({
        wrapperContainer: {
            backgroundImage: `url(/img/${bgImg}.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: minHeight ? minHeight : 100,
            [theme.breakpoints.down('lg')]: {
                minHeight:
                    lg ?
                        lg : ''
            },
            [theme.breakpoints.down('xl')]: {
                minHeight:
                    xl ?
                        xl : ''
            },
            [theme.breakpoints.down('md')]: {
                minHeight:
                    md ?
                        md : ''
            },
            [theme.breakpoints.down('sm')]: {
                minHeight:
                    sm ?
                        sm : ''
            },
            [theme.breakpoints.down('xs')]: {
                minHeight:
                    xs ?
                        xs : ''
            },
        },
    }))
    const classes = useStyles()
    return (
        <>
            {wrapper ?
                <Box {...props}>
                    <Container>
                        {children}
                    </Container>
                </Box>
                :
                <Container {...props}>
                    {children}
                </Container>
            }
        </>
    )
}

export default MyContainer
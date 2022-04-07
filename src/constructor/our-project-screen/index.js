import React from 'react'

import { Box, Grid, Typography } from '@material-ui/core'
import { MyContainer, CardUsefulLink, YellowSeparator } from '../../components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    flexBox: {
        display: 'flex',

    }
});


const OurProjectScreen = ({ pageHeader, ...props }) => {
    const classes = useStyles()
    const array = [
        {
            img: '/image/Rectangle75.png',
            description: 'Школа домашнего ухода',
            Link: 'https://www.sakha.gov.ru/'
        },
        {
            img: '/image/Rectangle175.png',
            description: 'Ресурсный центр поддержки семей с паллиативными пациентами',
            Link: 'https://minzdrav.gov.ru/'
        },
        {
            img: '/image/Rectangle1754.png',
            description: 'Проект “Деменции нет”',
            Link: 'https://minzdrav.sakha.gov.ru/'
        },
        {
            img: '/image/Rectangle1752.png',
            description: 'Спецпроекты по донорству',
            Link: 'https://minzdrav.sakha.gov.ru/'
        },
    ]
    return (
        <Box {...props}>
            <MyContainer wrapper={false}>
                {pageHeader ?
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <YellowSeparator />
                        <Typography variant="h4" style={{ marginBottom: 20, color: '#F2A340' }}>Наши проекты</Typography>
                    </Box>
                    : ''}
                <Grid className={classes.flexBox} container>
                    {array.map((item, index) => (
                        <Grid key={index} item lg={3} xl={3} md={3} sm={6} xs={12}>
                            <CardUsefulLink img={item.img} description={item.description} link={item.Link} />
                        </Grid>
                    ))}
                </Grid>
            </MyContainer>
        </Box>
    )
}

export default OurProjectScreen
import React from 'react'

import { Container, Grid, Box, Typography } from '@material-ui/core'

import { CardMedia, YellowSeparator } from '../../../components'

const MediaAboutUs = () => {
    const array = [
        {
            img: '/image/mediaCardImg1.png',
            title: 'Ко Дню пожилых открыт стационар для паллиативных пациентов',
            description: 'В конце сентября распахнул двери новый стационар – отделение сестринского ухода Республиканской клинической больницы №3 для паллиативн...'
        },
        {
            img: '/image/mediaCardImg2.png',
            title: 'Пересадка органов в Якутии: есть ли перспектива?',
            description: '20 лет тому назад, в 2001 году, произошло одно значимое событие — в Национальном центре медицины в Якутске впервые провели операцию по трансплан...'
        },
        {
            img: '/image/mediaCardImg3.png',
            title: 'Проект «Надежда». Как якутянам с заболеваниями почек помогли в пандемию',
            description: '«АиФ на Севере» уже рассказывал, как жилось людям с ВИЧ и диабетом в эпоху коронавируса. В группе риска по COVID-19 оказались и якутяне с почечной недостаточ...'
        }
    ]
    return (
        <Container style={{ marginTop: 100 }}>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <YellowSeparator />
                <Typography variant="h4" style={{ marginBottom: 40, color: '#F2A340' }}>СМИ о нас </Typography>
            </Box>
            <Grid container>
                {array.map((item, index) => (
                    <Grid key={index} item lg={4} xl={4} md={4} sm={6} xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CardMedia img={item.img} title={item.title} description={item.description} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default MediaAboutUs
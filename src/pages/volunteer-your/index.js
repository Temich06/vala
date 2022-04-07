import React from 'react'

import {Box, Typography, Grid} from '@material-ui/core'

import { MyContainer, Layout, CardTeam } from '../../components'

const VolunteerYour = () => {
    const array = [
        {
            title: 'ФИО',
            description: ['волонтер', 'регион', 'Республика Саха Якутия(Якутск)']
        },
        {
            title: 'ФИО',
            description: ['волонтер', 'регион', 'Республика Саха Якутия(Якутск)']
        },
        {
            title: 'ФИО',
            description: ['волонтер', 'регион', 'Республика Саха Якутия(Якутск)']
        },
        {
            title: 'ФИО',
            description: ['волонтер', 'регион', 'Республика Саха Якутия(Якутск)']
        },
        {
            title: 'ФИО',
            description: ['волонтер', 'регион', 'Республика Саха Якутия(Якутск)']
        },
        {
            title: 'ФИО',
            description: ['волонтер', 'регион', 'Республика Саха Якутия(Якутск)']
        },
        {
            title: 'ФИО',
            description: ['волонтер', 'регион', 'Республика Саха Якутия(Якутск)']
        },
    ]
    return(
        <Layout>
            <MyContainer wrapper={false} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 100,
                color: '#659F6B',
                flexDirection:'column'
            }}>
                <Typography variant="h3">0 ВОЛОНТЕРОВ В ВАШЕМ РЕГИОНЕ</Typography>
                <Grid container>
                {
                    array.map((item, index) => (
                        <Grid item lg={4} xl={4} md={4} sm={6} xs={12}>
                        <CardTeam title={item.title} key={index} description={item.description} />
                        </Grid>
                    ))
                }
                </Grid>
            </MyContainer>
        </Layout>
    )
}

export default VolunteerYour
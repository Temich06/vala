import React from 'react'

import { MyContainer, CardInfo, PageHeader } from '../../../components'
import { Grid } from '@material-ui/core'
import DataInfo from '../../../Data/DataInfo'

const InfoCardScreen = () => {
    return (
        <MyContainer wrapper={false}
            style={{ marginTop: 100 }}
        >
            <PageHeader title="О нас" />
            <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {DataInfo.map((item, index) => {
                    return (
                        <Grid item key={index} lg={3} xl={3} md={3} sm={6} xs={12}>
                            <CardInfo text_top={item.text_top} number={item.number} text_bottom={item.text_bottom} />
                        </Grid>
                    )
                })}
            </Grid>
        </MyContainer>
    )
}

export default InfoCardScreen
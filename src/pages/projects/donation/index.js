import React from 'react'

import { Container, Typography } from '@material-ui/core'

import { Layout, TextAndImg } from '../../../components'
import OurProjectScreen from '../../../constructor/our-project-screen'

const Donation = () => {
    return (
        <Layout>
            <Container style={{ paddingTop: 100 }}>
                <TextAndImg title="Спецпроекты по донорству" descriptions={['Социальные проекты в поддержку пациентов с терминальными стадиями заболеваний почек и печени реализуются с 2014 г. ']} img="/image/Rectangle45.png" bottomLine={true} />
                <Typography variant="h6" style={{ marginTop: 40 }}>Мы начали работу в Якутии с 2014 г. как общественное объединение пациентов и врачей с целью поддержки людей с терминальными стадиями заболеваний почек. За весь период работы, нами организовано 31 благотворительные акции по раннему выявлению заболеваний почек, где приняли участие около 5000 людей. Мы работаем через сообщества пациентов, где общаются и помогают друг-другу 459 человек - пациенты, их родственники и прижизненные доноры органов. Два наших проекта "Дар жизни" и "Надежда на будущее" стали победителями конкурса Фонда президентских грантов в 2021 г. </Typography>
                <OurProjectScreen pageHeader={true} style={{ marginTop: 50 }} />
            </Container>
        </Layout>
    )
}

export default Donation
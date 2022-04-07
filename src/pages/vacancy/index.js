import React from 'react'

import { Container } from '@material-ui/core'

import DataVacancy from '../../Data/DataVacancy'
import { Layout, PageHeader } from '../../components'
import CommonCardConstructor from '../../constructor/CommonCardConstructor'


const Vacancy = () => {
    return (
        <Layout>
            <Container style={{ paddingTop: 100 }}>
                <PageHeader title="Вакансии" description='это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' />
                <CommonCardConstructor data={DataVacancy} />
            </Container>
        </Layout>
    )
}

export default Vacancy
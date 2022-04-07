import React from 'react'

import { Container, Box } from '@material-ui/core'

import DataVolunteers from '../../Data/DataVolunteers'
import { Layout, PageHeader } from '../../components'
import CommonCardConstructor from '../../constructor/CommonCardConstructor'

const Valunteers = () => {
    return (
        <Layout>
            <Container>
                <Box style={{ paddingTop: 100, marginBottom: 100 }}>
                    <PageHeader title="Волонтерам" description='это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' />
                    <CommonCardConstructor data={DataVolunteers} />
                </Box>
            </Container>
        </Layout>
    )
}

export default Valunteers
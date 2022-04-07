import React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { Layout, PageHeader } from '../../components'
import FaqScreen from './components/FaqScreen';
import FormFeedBack from './components/FormFeedback'

const Help = () => {
    return (
        <Layout>
            <Container style={{ marginTop: 100, marginBottom: 100 }}>
                <PageHeader title="Помощь" description='это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' />
                <FaqScreen />
                <FormFeedBack />
            </Container>
        </Layout>
    )
}

export default Help
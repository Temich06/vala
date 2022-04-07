import React from 'react'

import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { Layout, PageHeader } from '../../components'
import FaqScreen from './components/FaqScreen';
import FormFeedBack from './components/FormFeedback'

const Help = () => {
    return (
        <Layout>
            <Container style={{ paddingTop: 100, paddingBottom: 100 }}>
                <PageHeader title="Помощь" fontSize={50} />
                <FaqScreen />
                <FormFeedBack />
            </Container>
        </Layout>
    )
}

export default Help
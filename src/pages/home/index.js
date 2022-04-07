import React from 'react'
import StartedBlog from './component/StartedBlog'
import AnswerGroup from './component/AnswerGroup'
import { makeStyles } from '@material-ui/core/styles';
import { SliderUsefulLinks, Layout } from '../../components'
import InfoCardScreen from './component/InfoCardScreen'
import ClippingNewsScreen from './component/ClippingNewsScreen';
import InfoTextScreen from './component/InfoTextScreen'

import OurProjectScreen from '../../constructor/our-project-screen';

import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

}));


const Home = () => {
    const classes = useStyles()
    return (
        <Layout style={{ bgcolor: '#FCFCFC' }}>
            <StartedBlog />
            <InfoCardScreen />
            <AnswerGroup />
            <InfoTextScreen />
            <OurProjectScreen pageHeader={true} />
            <Box style={{ marginTop: 80, marginBottom: 100 }}>
                <SliderUsefulLinks />
            </Box>
        </Layout>
    )
}

export default Home
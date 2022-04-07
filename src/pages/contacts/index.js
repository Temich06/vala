import React from 'react'

import { Box } from '@material-ui/core'
import { Layout, SliderUsefulLinks } from '../../components'

import StartBlog from './components/StartBlog'
import TwoScreen from './components/TwoScreen'

const Contacts = () => {
    return (
        <Layout>
            <Box style={{ marginBottom: 100 }}>
                <StartBlog />
                <TwoScreen />
                <Box style={{ marginTop: 100 }}>
                    <SliderUsefulLinks />
                </Box>
            </Box>
        </Layout>
    )
}

export default Contacts
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MyContainer, CardBlog, Button } from '../../../components'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import API from '../../../api'

const ClippingNewsScreen = () => {
    const [state, setState] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        API.getPosts().then((res) => {
            setState(res.data.results.slice(0, 3))
            setLoading(false)
        })
    }, [])
    return (
        <MyContainer wrapper={false} style={{
            marginTop: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <Typography variant="h4">Новости</Typography>
            {loading && <CircularProgress style={{ marginTop: 50 }} />}
            <Grid container style={{ marginTop: 50 }}>
                {state ? state.map((item) => {
                    return (
                        <Grid item lg={4} xl={4} md={4} sm={6} xs={12}>
                            <CardBlog img={item.title_image} title={item.title} description={item.description} id={item.id} />
                        </Grid>
                    )
                }) : 'нету данных'}
            </Grid>
            <Button variant="outlined"
                style={{
                    marginTop: 50,
                    color: '#FF725E',
                    border: '2px solid #FF725E',
                }}
                onClick={() => { navigate('/news') }}
            >Все новости</Button>
        </MyContainer>
    )
}

export default ClippingNewsScreen
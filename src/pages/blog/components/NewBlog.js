import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'

import { CardNewBlog } from '../../../components'
import DataBlog from '../../../Data/BlogData'
import API from '../../../api'

const useStyles = makeStyles((theme) => ({
    box: {
        boxShadow: '1px 2px 13px rgba(0, 0, 0, 0.15)',
        minHeight: 300,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        height: '100%',
        [theme.breakpoints.down('md')]: {
            marginLeft: '-10px',
        },
        background: 'white'
    }
}))

const NewBlog = () => {
    const classes = useStyles()
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
    };
    useEffect(() => {
        API.getPosts().then((res) => {
            console.log(res)
        })
    }, [])
    return (
        <Box className={classes.box}>
            <Typography variant="h6" style={{ marginBottom: 10 }}>Новый блоги</Typography>
            <Slider {...settings} >
                {DataBlog.map((item, index) => (
                    <CardNewBlog key={index} img={item.img} title={item.title} description={item.description} id={item.id} date={item.date} />
                ))}
            </Slider>
        </Box>
    )
}

export default NewBlog
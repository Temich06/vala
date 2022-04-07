import React from 'react'
import Slider from "react-slick"
import { Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        height: '100%',
        marginBottom: 40,
        marginTop: 15,
    },
    content: {
        marginTop: '-180px'
    }
}));

const SliderMedic = () => {
    const classes = useStyles()
    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const object = [
        {
            img: '/image/Rectangle178.png',
        },
        {
            img: '/image/Rectangle178.png',
        },
        {
            img: '/image/Rectangle178.png',
        },
    ]

    return (
        <Container className={classes.content}>
            <Slider {...settings} >
                {object.map((item, index) => (
                    <div key={index} >
                        <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={item.img} className={classes.img} alt={''} />
                        </Grid>
                    </div>
                ))
                }
            </Slider>
        </Container>
    )
}

export default SliderMedic
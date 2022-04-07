import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Typography } from '@material-ui/core'
import Slider from 'react-slick'

import { CardUsefulLink, YellowSeparator } from '../..'

const useStyles = makeStyles(() => ({
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 30
    }
}))

const UsefulLinks = () => {
    const [slidesToShow, setSlidesToShow] = useState()
    const classes = useStyles()
    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            }
            else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    const array = [
        {
            img: '/image/Group-3691.png',
            description: 'volonter.ru',
            Link: 'https://volonter.ru/'
        },
        {
            img: 'https://dobro.ru/_next/image?url=https%3A%2F%2Fstorage.yandexcloud.net%2Fdobro-static%2Fprod%2Fimported%2Fpictures%2F011027e7a4f548a9bbd8efcda67ff0fd.jpg&w=640&q=75',
            description: 'Центр по работе с волонтерами Республики Саха (Якутия)',
            Link: 'https://dobro.ru/organizations/217/info'
        },
        {
            img: '/image/Group-362(2).png',
            description: 'Благотворительный фонд "Старость в радость" ',
            Link: 'https://minzdrav.sakha.gov.ru/'
        },
    ]

    return (
        <Box style={{ overflow: 'hidden', }}>
            <Container>
                <YellowSeparator />
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="h4" style={{ marginBottom: 20, color: '#8DD18C' }}>Полезные ссылки</Typography>
                </Box>
                <Slider {...settings} >
                    {array.map((item, index) => (
                        <Box key={index} >
                            <CardUsefulLink img={item.img} description={item.description} link={item.Link} />
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    )
}

export default UsefulLinks
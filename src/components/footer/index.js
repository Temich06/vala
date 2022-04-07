import React from 'react';
import PropTypes from 'prop-types';

import { Container, Grid, Typography, MenuItem, Box, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import { Button } from '..'

const useStyles = makeStyles(() => ({
    BorderLine: {
        height: 1,
        background: 'white',
        transform: 'scaleY(0.5)',
        marginTop: 5
    },
    social: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    }
}))

export default function Footer(props) {
    const classes = useStyles()

    const array = [
        {
            title: 'ГЛАВНАЯ',
            options: [
                {
                    label: 'Новости',
                    to: ''
                },
                {
                    label: 'Блог',
                    to: ''
                },
                {
                    label: 'F.A.Q (помощь)',
                    to: ''
                },
                {
                    label: 'Отчет',
                    to: ''
                },
            ]
        },
        {
            title: 'ПАЛЛИАТИВНАЯ ПОМОЩЬ',
            options: [
                {
                    label: 'Волонтерам',
                    to: '/valunteers'
                },
                {
                    label: 'Вакансии',
                    to: '/vacancy'
                },
                {
                    label: 'Контакты',
                    to: '/contacts'
                },
                {
                    label: 'Команда',
                    to: '/team'
                },
                {
                    label: 'Проекты',
                    to: '/about'
                },
            ]
        },
        {
            title: 'ДОКУМЕНТЫ',
            options: [
                {
                    label: 'ОГРН',
                    to: ''
                },
                {
                    label: 'ИНН',
                    to: ''
                },
                {
                    label: 'УСТАВ',
                    to: ''
                },
            ]
        }
    ]
    return (
        <footer style={{ backgroundColor: '#313131', paddingTop: 50, paddingBottom: 50, color: 'white' }}>
            <Container>
                <Grid container>
                    {array.map((item, index) => (
                        <Grid item key={index} lg={3} xl={3} md={4} sm={6} xs={12} style={{ marginTop: 20 }}>
                            <Box style={{ width: '90%' }}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Box className={classes.BorderLine}></Box>
                                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                                    {item.options.map((option, index) => (
                                        <Link to={option.to} key={index} style={{ marginTop: 8, color: 'white', cursor: 'pointer' }}>
                                            {option.label}
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                    <Grid item lg={3} xl={3} md={4} sm={6} xs={12} className={classes.social}>
                        <Typography variant="h6">МЫ В СОЦСЕТЯХ</Typography>
                        <Box style={{ marginBottom: 20, marginTop: 10 }}>
                            <IconButton size="small"><img src="/image/youtube.png" /></IconButton>
                            <IconButton size="small"><img src="/image/vk.png" /></IconButton>
                            <IconButton size="small"><img src="/image/instagram.png" /></IconButton>
                        </Box>
                        <Typography variant="h6" style={{ marginBottom: 10 }}>ЕСТЬ ВОПРОСЫ?</Typography>
                        <Button>Задать вопрос</Button>
                    </Grid>
                </Grid>
                <Box style={{ marginTop: 20 }}>
                    <Box className={classes.BorderLine}></Box>
                    <Typography variant="body1" style={{ marginTop: 20 }}>Автономная некоммерческая организация "Комплексный центр медицинского и социального обслуживания населения" 2022</Typography>
                </Box>
            </Container>
        </footer>
    );
}
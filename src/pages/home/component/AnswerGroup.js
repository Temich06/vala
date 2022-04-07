import React from 'react'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { PageHeader } from '../../../components'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        flexDirection: 'column'
    },
    card: {
        marginTop: 35,
        borderRadius: 15,
        padding: 20,
        background: '#FFFFFF'
    },
    title: {
        marginBottom: 30,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: 30,
            color: 'black'
        },
    },
    box_title: {
        [theme.breakpoints.down('sm')]: {
            color: 'white'
        },
    },
    icon: {
        width: 50,
        height: 50,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
}));

const SentenceAbout = () => {
    const classes = useStyles()
    const object = [
        {
            description: 'Автономная некоммерческая организация "Комплексный центр медицинского и социального обслуживания населения" работает с февраля 2020 г. Основной целью общественной организации является предоставление медицинских и социальных услуг гражданам, частично утратившим способность к самообслуживанию в связи с преклонным возрастом, болезнью, инвалидностью, лицам, пострадавшим в результате чрезвычайных ситуаций.',
        },
        {
            description: 'Фирменное название организации - АНО "ДолгоЖить". С сентября 2021 г., организация является общественным куратором Отделения сестринского ухода Республиканской клинической больницы №3. Как куратор, организация реализует на базе отделения общественные проекты и оказывает социальную поддержку пациентам.',
        },
        {
            description: 'Наша миссия - содействие развитию паллиативной помощи в регионе.',
        },
        {
            description: 'Сегодня АНО "ДолгоЖить" реализует социальный проект по Школе домашнего ухода для близких родственников пациентов с дефицитом самообслуживания и имеющих, в том числе статус "паллиативного пациента". Данный проект стал победителем конкурса Фонда президентских грантов. В команде проекта - врачи и медсестры паллиативной медицинской помощи.',
        },
        {
            description: 'АНО "ДолгоЖить" также реализует спецпроекты по донорству в поддержку пациентов с терминальными стадиями заболеваний почек и печени, и их близких родственников. Более подробно об этих проектах можно узнать из раздела "Спецпроекты по донорству". ',
        },
    ]

    return (
        <Container className={classes.container}>
            <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                {object.map((item, index) => (
                    <Grid item key={index} className={classes.card} lg={12} sm={12} md={12} xl={12} xs={12}>
                        <Typography variant="h6">{item.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default SentenceAbout
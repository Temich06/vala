import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CardTeam } from '../../../components'

const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const DreamTeam = () => {
    const classes = useStyles()

    const object = [
        {
            title: 'Наталия Каратаева',
            description: ['Директор, кандидат биологических наук', '+7(914)108-96-59', 'proekt-hope@mail.ru']
        },
        {
            title: 'Наталия Жиркова',
            description: ['Координатор спецпроектов по донорству']
        },
        {
            title: 'Ангелина Изюмская',
            description: ['Руководитель сообщества "Донор.Info" спецпроектов по донорству']
        },
        {
            title: 'Айталина Иванова',
            description: ['Руководитель родительского сообщества спецпроектов по донорств']
        },
        {
            title: 'Екатерина Васильева',
            description: ['руководитель проекта "Школа домашнего ухода" для паллиативных пациентов, врач - терапевт паллиативной медицинской помощи']
        },
        {
            title: 'Нарыйа Стручкова',
            description: ['тренер-преподаватель по уходу, медсестра паллиативной медицинской помощи']
        },
        {
            title: 'Татьяна Габышева',
            description: ['тренер-преподаватель по уходу, медсестра паллиативной медицинской помощи']
        },
        {
            title: 'Антонина Анисимова',
            description: ['врач-нефролог проекта "Надежда на будущее. Арктика 1.0"']
        },
        {
            title: 'Валерия Ефимова',
            description: ['айти волонтер']
        },
        {
            title: '10. Катерина Григорьева',
            description: ['медиа-амбассадор спецпроектов по донорству']
        },
    ]

    return (
        <Container style={{ marginTop: 100 }}>
            <Grid >
                <Typography variant="h3" style={{ color: '#BE6E20' }}>Команда</Typography>
            </Grid>
            <Grid container className={classes.content}>
                {object.map((item, index) => (
                    <Grid item key={index} lg={3} sm={6} md={4} xl={3} xs={12}>
                        <CardTeam img={item.img} title={item.title} description={item.description} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default DreamTeam
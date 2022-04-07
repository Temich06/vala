import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, MyContainer, PageHeader, TextAndImg } from '../../../components'
import OurProjectScreen from '../../../constructor/our-project-screen'

import { Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    Text: {
        width: '95%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    }
}))

const Palliative = () => {
    const classes = useStyles()
    const text = [
        'С 2020 г. мы начали реализацию проектов по развитию медико-социальной поддержки паллиативных пациентов пожилого возраста  их родственников: "Школа домашнего ухода" (поддержан Фондом президентских грантов), "Деменции нет", "Ресурсный центр "ДолгоЖить". В 2022 г. мы хотим реализовать проект по развитию социального агентства сиделок "ДолгоЖить".',
        'В 2014 г. мы начали работу как добровольческое сообщество пациентов и врачей "Надежда на будущее" в поддержку развития трансплантации в Якутии. Нами проведены два благотворительных фестиваля "Надежда на будущее", реализованы программы "Грамотный пациент" и "Профилактика заболеваний почек". В 2020-2021 г. наша команда реализовала два проекта "Дар жизни" - здоровьесбережение прижизненных доноров органов и "Надежда на будущее" - поддержка пациентов с терминальными стадиями заболеваний почек и печени в период пандемии. Оба проекта были поддержаны Фондом президентских грантов через Ассоциацию частных медицинских клиник и центров Якутии. Сегодня эти проекты развиваются в рамках деятельности АНО "Комплексный центр медицинского и социального обслуживания населения" как спецпроекты по донорству.',
    ]
    return (
        <Layout>
            <MyContainer style={{ paddingTop: 100 }} wrapper={true} >
                <TextAndImg descriptions={text} title="Наши проекты" img={'/image/Rectangle311.png'} bottomLine={true} />
                <OurProjectScreen style={{ marginTop: 50 }} pageHeader={false} />
            </MyContainer>
        </Layout >
    )
}

export default Palliative
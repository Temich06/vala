import React from 'react'

import { Container, Typography, Box, Grid } from '@material-ui/core'
import { Layout, PageHeader } from '../../components'

const DocumentPage = () => {
    const array = [
        {
            label: 'Полное юридическое наименование:',
            description: 'Автономная некоммерческая организация "Комплексный центр медицинского и социального обслуживания населения"'
        },
        {
            label: 'Краткое наименование:',
            description: 'Автономная некоммерческая организация "Комплексный центр обслуживания населения"'
        },
        {
            label: 'Фирменное наименование:',
            description: 'Автономная некоммерческая организация "ДолгоЖить"'
        },
        {
            label: 'Юридический адрес:',
            description: 'Автономная некоммерческая организация "ДолгоЖить"'
        },
        {
            label: 'Почтовый адрес:',
            description: '677027, Республика Саха (Якутия), г. Якутск, ул. Горького дом 94, офис 1.'
        },
        {
            label: 'Телефон:',
            description: '+7(914)277-74-29'
        },
        {
            label: 'Организационно-правовая форма:',
            description: 'Некоммерческая организация'
        },
        {
            label: 'Дата государственной регистрации:',
            description: '11.02.2020 г.'
        },
        {
            label: 'Дата работы в Республике Саха (Якутия) в качестве добровольческого проекта "Надежда на будущее":',
            description: '12.01.2014 г.'
        },
        {
            label: 'Директор:',
            description: 'Каратаева Наталия Алексеевна'
        },
        {
            label: 'ОГРН:',
            description: '1201400001637'
        },
        {
            label: 'ИНН/КПП:',
            description: '1435349960/143501001'
        },
        {
            label: 'ОКВЭД:',
            description: '87.30'
        },
    ]
    const img_array = [
        {
            name: '/image/image10.png',
            title: 'ОГРН',
            parentheses: '(PDF)'
        },
        {
            name: '/image/image11.png',
            title: 'ИНН',
            parentheses: '(PDF)'
        },
        {
            name: '/image/image12.png',
            title: 'Устав',
            parentheses: '(PDF)'
        },
        {
            name: '/image/image13.png',
            title: 'Свидетельство о государственной регистрации некоммерческой организации ',
            parentheses: '(PDF)'
        },
        {
            name: '/image/image14.png',
            title: 'Свидетельство о государственной регистрации некоммерческой организации ',
            parentheses: '(PDF)'
        },
    ]
    return (
        <Layout>
            <Container style={{ paddingTop: 100 }}>
                <PageHeader title={'Документы'} />
                {array.map((item, index) => (
                    <Typography variant="h6" key={index} style={{ marginTop: 20 }}>{item.label}<span style={{ marginLeft: 10, fontWeight: 'bold' }}>{item.description}</span></Typography>
                ))}
                <Grid container >
                    {img_array.map((item, index) => (
                        <Grid key={index} style={{ marginTop: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} item xl={4} lg={4} md={4} sm={6} xs={12}>
                            <img src={item.name} />
                            <Typography vriant="h6" style={{ marginTop: 20, marginBottom: 10 }}>{item.title}</Typography>
                            <Typography vriant="h6" >{item.parentheses}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Layout>
    )
}

export default DocumentPage
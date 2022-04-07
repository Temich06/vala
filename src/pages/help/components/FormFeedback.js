import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

import { Form, Input, Button } from '../../../components'

const useStyles = makeStyles((theme) => ({
    box: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: 30
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    line: {
        width: 100,
        height: 2,
        background: '#2A5FA7',
        marginBottom: 50
    },
    form: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    }
}))

const FormFeedBack = () => {
    const classes = useStyles()
    return (
        <div className={classes.box}>
            <Box className={classes.line}></Box>
            <Box className={classes.titleBox}>
                <Typography className={classes.title}>Остались вопросы?</Typography>
                <Typography variant="body1">ответим на дополнительные вопросы в специальной форме, там же можно написать отзыв об платформе и поделится рекомендациями по улучшению сервиса.</Typography>
            </Box>
            <Form className={classes.form}>
                <Input label="ФИО пользователя" />
                <Input label="Адрес электронной почты" />
                <Input label="Контактный номер телефона" />
                <Input label="Текст" minRows={10} multiline id="outlined-multiline-static" aria-label="maximum height" />
                <Button style={{ marginTop: 20 }}>Отправить</Button>
            </Form>
        </div>
    )
}

export default FormFeedBack
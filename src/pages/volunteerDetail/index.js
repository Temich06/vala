import React from 'react'

import {Box, Typography, TextField} from '@material-ui/core'

import { MyContainer, Layout, Button} from '../../components'

const ValunteersDetail = () => {
    const array = [
        '1. Заполните анкету волонтера',
        '2. Придите на встречу-знакомство в наш офис г. Москва, Шухова, м. «Шаболовская» в один из предложенных дней. Предварительная запись на встречу не ведется, просто приходите еженедельно в указанное время. Просим не опаздывать!',
        'БЛИЖАЙШИЕ ВСТРЕЧИ-ЗНАКОМСТВА (просьба приходить точно к указанному времени): точное расписание мы пришлём Вам после отклика',
        'Предварительная запись на встречу не ведется. Просто приходите еженедельно в указанное время. (Просьба не опаздывать)',
        'Встреча-знакомство идет 1 час.',
        'С собой нужно принести паспорт',
        'Добровольческое движение Даниловцы — волонтерская организация, которая уже 11 лет помогает детям в больницах, приютах, домах-интернатах и взрослым, оказавшимся в сложной жизненной ситуации: бездомным, заключенным, малоимущим. Есть люди, которым нужна помощь. Есть и желающие помочь — волонтеры. Мы даем возможность им встретиться и делаем так, чтобы эта встреча была максимально полезна для всех!'
    ]
    return(
        <Layout>
        <MyContainer style={{paddingTop: 100}}>
            <Typography variant="h5">Волонтер в Центр милосердия</Typography>
            <Typography variant="h5" style={{ marginTop: 40}}>з/п не указана</Typography>
            <Box style={{display: 'flex', alignItems: 'center', marginTop: 40}}>
              <Button style={{background: '#2AA746', color: 'white'}}>Откликнуться</Button>
              <Button style={{marginLeft: 10, background: '#23A0F0', color: 'white'}}>Показать контакты</Button>
            </Box>
            <Typography variant="body1" style={{marginTop: 40}}>Требуемый опыт работы:<span style={{color: '#2AA746'}}> не требуется, Волонтерство, гибкий график</span></Typography>
            <Typography variant="h5" style={{marginTop: 30}}>Описание</Typography>
            <Box>
            {array.map((item, index) => (
                 <Typography variant="h6" key={index} style={{marginTop: 20}}>{item}</Typography>
            ))}
            </Box>
            <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItmes: 'center'}}>
            <Typography variant="h5" style={{marginTop: 40, marginBottom: 20}}>Оставьте свои контакты, чтобы<br /> работодатель мог связаться с вами</Typography>
            <TextField label="Email или номер телефона" variant='outlined'  />
            <Button style={{marginTop: 10}}>Отправить</Button>
            </Box>

        </MyContainer>
        </Layout>
    )
}

export default ValunteersDetail
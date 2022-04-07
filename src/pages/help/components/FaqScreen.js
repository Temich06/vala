import React from 'react'
import { Box, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

const useClasses = makeStyles({
    question: {
        padding: '10px 0px',
        fontWeight: 500,
        color: 'rgba(49, 49, 49, 1)',
    },
    answer: {

    }
})

const FaqScreen = () => {
    const classes = useClasses()
    const faqs = [
        {
            question: 'Часто задаваемый вопрос',
            answer: 'текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание ',
        },
        {
            question: 'Часто задаваемый вопрос',
            answer: 'текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание ',
        },
        {
            question: 'Часто задаваемый вопрос',
            answer: 'текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание ',
        },
        {
            question: 'Часто задаваемый вопрос',
            answer: 'текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание ',
        },
        {
            question: 'Часто задаваемый вопрос',
            answer: 'текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание ',
        },
        {
            question: 'Часто задаваемый вопрос',
            answer: 'текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание ',
        },
        {
            question: 'Часто задаваемый вопрос',
            answer: 'текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание текст ответ описание ',
        },
    ]
    return (
        <Box>
            {faqs.map((faq, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.question}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.answer}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Box>
    )
}

export default FaqScreen
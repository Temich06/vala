import React from 'react'
import { Box, Typography, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 300,
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            height: 400,
            paddingBottom: 30,
            paddingTop: 30
        },
    },
}));

const FirstBlog = () => {

    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h2" >Новости</Typography>
                <Grid item style={{ textAlign: 'center' }} lg={8} sm={12} md={8} xl={8} xs={12}>
                    <Typography style={{ fontSize: 16, marginTop: 20 }} variant="h6">это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</Typography>
                </Grid>
            </div>
        </Box >
    )
}

export default FirstBlog
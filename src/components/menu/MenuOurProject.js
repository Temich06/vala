import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, MenuItem, Typography, Drawer, Button } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'

import Links from '../../Data/Links'

const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        padding: 20,
    },
    menu_link: {
        textDecoration: 'none',
        color: 'black',
    },
    buttonShow: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: 'end',
            marginTop: '-15px'
        },
    }
}))

const MenuOurProject = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const [drawerOpen, setDrawerOpen] = useState(false)
    const body = () => {
        return (
            <Box className={classes.menu}>
                <Box className={classes.buttonShow} onClick={() => { setDrawerOpen(false) }}>
                    <Hamburger toggled={drawerOpen} />
                </Box>
                {Links.map((item, index) => (
                    <Button
                        key={index}
                        variant="outlined"
                        style={{ marginTop: 5 }}
                        onClick={() => {
                            navigate(item.link)
                        }}
                    >
                        {item.label}
                    </Button>
                ))}
            </Box>
        )
    }
    return (
        <div>
            <Box onClick={() => { setDrawerOpen(true) }}>
                <Hamburger toggled={drawerOpen} />
            </Box>
            <Drawer  {...{
                anchor: "left",
                open: drawerOpen,
                onClose: () => setDrawerOpen(false),
            }}>
                {body()}
            </Drawer>
        </div >
    )
}

export default MenuOurProject
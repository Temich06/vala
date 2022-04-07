import React, { useState, useEffect, useContext } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Menu,
    MenuItem,
    Box,
    Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from 'react-router-dom'
import { DispatchContext } from "../../store";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "white",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#1B1642",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        marginLeft: "38px",
        color: '#1B1642',
        fontSize: 18,
        [theme.breakpoints.down('md')]: {
            marginTop: 10,
            marginLeft: 0,
            border: '1px solid black',
            fontSize: 12
        },
    },
    toolbar: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    drawerContainer: {
        color: '#1B1642',
        height: '100%',
        width: 250
    },
    linkStyle: {
        textDecoration: 'none',
        color: 'black'
    },
    menuStyle: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            padding: 20
        },
    }
}));

export default function Header() {
    const { header, menuButton, toolbar, drawerContainer, linkStyle, menuStyle } = useStyles();
    const [statusThree, setStatusThree] = React.useState(null)
    const [statusFirst, setStatusFirst] = React.useState(null)
    const [statusSecond, setStatusSecond] = useState(null)
    const [statusFour, setStatusFour] = useState(null)

    const dispatch = useContext(DispatchContext)
    const navigate = useNavigate()
    const headersData = [
        {
            label: "ГЛАВНАЯ",
            href: '/'
        },
        {
            label: 'ПРОЕКТЫ',
            href: '/home-care-school',
        },
        {
            label: 'ПОМОЩЬ',
            href: '/help',
        },
        {
            label: "КОНТАКТЫ",
            href: '/contacts'
        },
        {
            label: "ВОЛОНТЁРАМ",
            href: '/valunteers'
        },
        {
            label: "ВОЛОНТЁРЫ",
            href: '/your-volunteers'
        }
    ];
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1280
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const displayDesktop = () => {
        return (

    
                <Container className={toolbar}>
                    {femmecubatorLogo}
                    <div>{getMenuButtons()}</div>
                </Container>
     
        );
    };
    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                    style={{ color: '#1B1642' }}
                >
                    <MenuIcon />
                </IconButton>
                <div >{femmecubatorLogo}</div>
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        );
    };
    const getDrawerChoices = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {getMenuButtons()}
            </div>
        )
    };
    const femmecubatorLogo = (
        <MenuItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', }} onClick={() => {
            navigate('/')
        }}>
            <img src={'/image/logo.png'} style={{ width: 90, height: 40, objectFit: 'cover' }} alt={''} />
            <Typography style={{ marginTop: 5, color: '#94DE82' }} variant="body1">Volunteer Activity</Typography>
        </MenuItem>
    );
    const getMenuButtons = () => {
        return (
            <div className={menuStyle}>
                {headersData.map((item, index) => {
                    return (
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            className={menuButton}
                            onClick={(e) => item.href ? navigate(item.href) : item.state(e.currentTarget)}
                            key={index}
                        >
                            {item.label}
                        </Button>
                    );
                })}
            </div>
        )
    };
    return (
        <div>
            <AppBar className={header} position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </div>
    );
}
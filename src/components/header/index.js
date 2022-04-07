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
            label: "НОВОСТИ",
            href: "/news",
        },
        {
            label: 'ПРОЕКТЫ',
            state: setStatusFirst,
        },
        {
            label: "ПАЛЛИАТИВНАЯ ПОМОЩЬ",
            state: setStatusSecond
        },
        {
            label: "ВОЛОНТЕРАМ",
            href: '/valunteers'
        }
    ];
    const menuData = [
        {
            status: statusFour,
            setStatus: setStatusFour,
            menuElems: [
                {
                    label: 'ГЛАВНАЯ',
                    href: '/about'
                },
                {
                    label: 'НОВОСТИ',
                    href: '/documents-page'
                },
                {
                    label: 'ПРОЕКТЫ',
                    href: '/team'
                },
                {
                    label: 'ПАЛЛИАТИВНАЯ ПОМОЩЬ',
                    href: '/reports'
                },
                {
                    label: 'ВОЛОНТЕРАМ',
                    href: '/'
                },
            ]
        },
        {
            status: statusFirst,
            setStatus: setStatusFirst,
            menuElems: [
                {
                    label: 'Наши проекты',
                    href: '/palliative'
                },
                {
                    label: 'Спецпроект по донерству',
                    href: '/donation'
                },
                {
                    label: 'Проект школа домашнего ухода',
                    href: '/home-care-school'
                },
                {
                    label: 'Проект по респисной помощи семьям с тяжелобольными пациентами',
                    href: '/seriouslyIllFamily'
                },
                {
                    label: 'Ресурсный центр поддержки семей с паллиативными пациентами',
                    href: '/helpPalliative'
                },
                {
                    label: 'Проект "Деменции нет"',
                    href: '/dementiaNo'
                },
            ]
        },
        {
            status: statusSecond,
            setStatus: setStatusSecond,
            menuElems: [
                {
                    label: 'Отделение сестринского ухода',
                    href: '/sister-care'
                },
                {
                    label: 'Проект "на связи"',
                    href: '/project-in-touch'
                },
                {
                    label: 'Новости отделения',
                    href: '/project-news'
                },
            ]
        },
        {
            status: statusThree,
            setStatus: setStatusThree,
            style: 40,
            menuElems: [
                // {
                //     label: 'Надежда на будущее',
                //     href: '/bud-page'
                // },
                // {
                //     label: 'Дар жизни',
                //     href: '/liver-trans'
                // },
                {
                    label: 'Проект "Школа домашнего ухода"',
                    href: '/home-care-school'
                },
                {
                    label: 'Проект по респисной помощи семьям с тяжелобольными пациентами',
                    href: '/seriouslyIllFamily'
                },
                {
                    label: 'Ресурсный центр поддержки семей с паллиативными пациентами',
                    href: '/helpPalliative'
                },
                {
                    label: 'Проект "Деменции нет"',
                    href: '/dementiaNo'
                },
                {
                    label: 'Спецпроекты по донорству',
                    href: '/donation'
                },
            ]
        }
    ]
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

            <Toolbar>
                <Container className={toolbar}>
                    {femmecubatorLogo}
                    <div>{getMenuButtons()}</div>
                </Container>
            </Toolbar>
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
        <MenuItem style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', }} onClick={() => {
            navigate('/')
        }}>
            <img src={'/image/Group15.png'} style={{ width: 40, height: 40 }} alt={''} />
            <Typography style={{ marginLeft: 5, color: 'black' }}>Паллиативная<br /> Помощь</Typography>
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
                {menuData.map((item, index) => (
                    <Menu
                        id="simple-menu"
                        key={index}
                        anchorEl={item.status}
                        keepMounted
                        open={Boolean(item.status)}
                        onClose={() => item.setStatus(null)}
                        style={{ marginTop: item.style ? item.style : 30 }}
                    >
                        {item.menuElems.map((item, index) => (
                            <Box key={index}>
                                {item.href ?
                                    <Link to={item.href} className={linkStyle} key={index}>
                                        <MenuItem >{item.label}</MenuItem>
                                    </Link>
                                    : <MenuItem
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        className={linkStyle}
                                        onClick={(e) => item.state(e.currentTarget)}
                                    >
                                        {item.label}
                                    </MenuItem>}
                            </Box>
                        ))}
                    </Menu>
                ))}
            </div>
        )
    };
    return (
        <header>
            <AppBar className={header} position="static">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}
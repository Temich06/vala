import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        color: 'black',
        border: 0,
        height: 48,
        padding: '25px 50px 25px 50px',
        fontSize: 16,
        borderRadius: 5,
        background: 'white',
        width: 'max-content',
        fontWeight: 600
    }
}));

const ButtonCustom = ({ onClick, href, children, variant, ...props }) => {
    const classes = useStyles()
    return (
        <Button variant={variant ? variant : 'contained'} type="submit" className={classes.btn} onClick={onClick} href={href} {...props}>
            {children}
        </Button>
    )
}

export default ButtonCustom
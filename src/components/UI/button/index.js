import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  
}));

const ButtonCustom = ({ onClick, href, children, variant, ...props }) => {
    const classes = useStyles()
    return (
        <Button color="primary" variant={variant ? variant : 'contained'} type="submit" size="large" onClick={onClick} href={href} {...props}>
            {children}
        </Button>
    )
}

export default ButtonCustom
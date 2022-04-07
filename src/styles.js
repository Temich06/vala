import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#61d8c5',
        },
        secondary: {
            main: '#EA5858'
        },
        success: {
            main: '#61d8c5'
        },
    },
});

export const mainTheme = {
    fontFamily: {
        DmSans: '"DM Sans", sans-serif',
        Roboto: '"Roboto", sans-serif',
    },
    textSizes: {
        extraLarge: 64,
        large: 48,
        middle: 36,
        small: 20,
        regular: 18,
        extraSmall: 14
    },
    bgColors: {
        orange: '#FFA89C'
    },
    textColors: {
        orange: '#FF725E'
    }
}
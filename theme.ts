'use client';
// theme.ts
import { createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

// 1. Create base theme (MUI default)
const baseTheme = createTheme();

// 2. Extend base theme, overriding only certain parts
const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes:{
        light: {
            palette: {
                primary: {
                    main: deepOrange[500],
                },
                // You can also override secondary, error, etc. if needed
            },
        },
        dark: {
            palette: {
                primary: {
                    main: deepOrange[400],
                },
                // You can also override secondary, error, etc. if needed
            },
        },
    }

});

export default theme;

import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  type DefaultTheme = Theme;
}

export const theme = createTheme({
  typography: {
    fontFamily: 'NanumBarunGothic',
  },
  palette: {
    primary: {
      main: '#004c3f',
      light: '#38786a',
      dark: '#002419',
    },
    secondary: {
      main: '#6d4c41',
      light: '#9c786c',
      dark: '#40241a',
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});

import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  type DefaultTheme = Theme;

  interface Palette {
    dark: Palette['primary'];
    light: Palette['primary'];
  }
  interface PaletteOptions {
    dark: PaletteOptions['primary'];
    light: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    dark: true;
    light: true;
  }
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
    dark: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    light: {
      main: '#ffffff',
      contrastText: '#000000',
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});

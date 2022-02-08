import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const theme: Theme = createMuiTheme({
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

import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const theme: Theme = createMuiTheme({
  typography: {
    fontFamily: 'NanumBarunGothic',
  },
  palette: {
    primary: {
      main: '#78909c',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#e0e0e0',
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});

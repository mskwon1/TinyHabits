import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const theme: Theme = createMuiTheme({
  typography: {
    fontFamily: 'NanumBarunGothic',
  },
  palette: {
    primary: {
      main: '#4db6ac',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#6200ea',
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});

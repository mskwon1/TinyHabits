import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../utils/globalTheme';
import '../styles/globals.css';
import Header from '../components/layout/Header';
import { NavigationBar } from '../components/layout/NavigationBar';
import { SessionProvider } from 'next-auth/react';
import { Box, CssBaseline } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <NavigationBar />
        <Component {...restPageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

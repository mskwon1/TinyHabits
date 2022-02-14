import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../utils/globalTheme';
import '../styles/globals.css';
import Header from '../components/layout/Header';
import { NavigationBar } from '../components/layout/NavigationBar';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Header />
        <NavigationBar />
        <Component {...restPageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

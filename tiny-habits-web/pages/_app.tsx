import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../utils/globalTheme';
import '../styles/globals.css';
import Header from '../components/layout/Header';
import { NavigationBar } from '../components/layout/NavigationBar';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NavigationBar />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;

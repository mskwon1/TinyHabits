import { AppProps } from 'next/app';
import wrapper from '../store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);

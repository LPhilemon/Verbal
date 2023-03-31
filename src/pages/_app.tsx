import '@/styles/globals.css';
import type { AppProps } from 'next/app';
//import AppBarComponent from '../components/AppBar/AppBarComponent';
import AppBarComponent from '@/components/AppBar/AppBarComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBarComponent />
      <Component {...pageProps} />
    </>
  );
}


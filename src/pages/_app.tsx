import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Document from 'next/document';
//import AppBarComponent from '../components/AppBar/AppBarComponent';
import AppBarComponent from '@/components/AppBar/AppBarComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <AppBarComponent />
      
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap" rel="stylesheet"/>

        
      <Component {...pageProps} />
    </>
  );
}


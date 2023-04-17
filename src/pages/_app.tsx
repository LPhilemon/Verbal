import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@/styles/fonts.css'; // Adjust the path to your CSS file
import Document from 'next/document';
//import AppBarComponent from '../components/AppBar/AppBarComponent';
import AppBarComponent from '@/components/AppBar/AppBarComponent';
import AppFooter from '@/components/AppFooter/AppFooterComponent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    
      <AppBarComponent />
      
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap" rel="stylesheet"/>

        
      <Component {...pageProps} />
      <AppFooter />
    </>
  );
}


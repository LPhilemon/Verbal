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
    <title>Inverbally</title>
      <AppBarComponent />
      
        
        
      <Component {...pageProps} />
      <AppFooter />
    </>
  );
}

